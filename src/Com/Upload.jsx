import React, { useState } from 'react'
import './Up.css'
import {OutTable,ExcelRenderer} from 'react-excel-renderer'
import { useEffect } from 'react';
export const Upload = ({setcart,setheads}) => {
    const [head,sethead]=useState([]);
    const [clos,setclos]=useState([]);

    const exceldata=(e)=>{
        const file=e.target.files[0];
        ExcelRenderer(file,(err,res)=>{
              if(err){
                console.log(err);
              }
              else{
                  sethead(res.rows[0]);
                  setclos(res.rows);
                  localStorage.setItem("clos",JSON.stringify(res.rows[0]));
                  localStorage.setItem("rows",JSON.stringify(res.rows));
                }
        }) 


    }

    useEffect(()=>{
          setheads(head);
          setcart(clos);
    },[head])
useEffect(()=>{
  const savec=localStorage.getItem("clos")
  const saver=localStorage.getItem("rows")
  if(savec&&saver){
    sethead(JSON.parse(savec))
    setclos(JSON.parse(saver));       
  }
},[])
  return (
    <>
    <div className='body-overall'>
      <div className='upload-overall-box'>
      <div className='upload-box'>
              <div className='input-upload-box'>
                <h4>Choose the execel file</h4>
                <label htmlFor="file">Choose Excel file</label>
                 <img src="" alt="" />
                <input type="file" onChange={(e)=>exceldata(e)} name="" id="file" />
              </div>
      </div>
      {/* table */}
      <div className='excel-table'>
      <table>
        <thead>
          <tr>
             {
                head.map((heads,index)=>(
                    <th key={index}>{heads}</th>
                ))
             }
             </tr>
             </thead>
             <tbody>
                {
                    clos.slice(1).map((cl,i)=>(
                        <tr key={i}>
                        {
                            cl.map((c,n)=>(
                                <td key={n}>{c}</td>
                            ))
                        }
                        </tr>
                    ))
                }
             </tbody>
              
    </table>
      </div>
      </div>
      </div>
    </>
  )
}
