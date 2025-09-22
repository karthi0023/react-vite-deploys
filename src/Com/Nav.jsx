import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
export const Nav = () => {
  return (
   <>
      <nav>
        <div className='logo-box'>
            <img src="" alt="" />
            <h4>MVM</h4>
        </div>
        <ul>
           <Link to={'/'}><a><li>Billing</li></a></Link> 
            <Link to={"/th"}><li>Edit Product</li></Link>
            <Link to={'/two'}><a><li>Upload</li></a></Link>
        </ul>
      </nav> 
      <div className='line'></div>
   </>
  )
}
