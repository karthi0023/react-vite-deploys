import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Nav} from './Com/Nav'
import {Bill} from './Com/Bill'
import {Upload} from './Com/Upload'
import { Edit } from './Com/Edit'
function App() {
  const [data,setdata]=useState([]);
  const [headata,setheaddata]=useState([]);
  return (
   
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Bill cart={data}  head={headata}  />} />
          <Route path='/th' element={<Edit cart={data}     head={headata}  />} />
          <Route path='/two' element={<Upload   setcart={setdata}  setheads={setheaddata}/>} />
        </Routes>
      </BrowserRouter>
    
    
    </>
  )
}

export default App
