import React, { useEffect, useReducer, useState } from 'react'
import './Bill.css'

const state = [];
function fun(state, action) {
  return [...state, { id: Date.now(), tabletname: action.a, tabletqty: action.b, tabletunit: action.c, tabletrate: action.f, tabletstart: action.d, tabletend: action.e }];
}
export const Bill = ({ cart, head }) => {
  const [sale, setsale] = useReducer(fun, state);
  const [name, setname] = useState([]);
  const [qty, setqty] = useState([]);
  const [start_date, setstart_date] = useState([]);
  const [end_date, setend_date] = useState([]);
  var [rate, setrate] = useState();
  var [re_rates, setre_rates] = useState();
  const [show, setshow] = useState(false);
  const [search, setsearch] = useState("");
  const handles = (e) => {
    setname(e[0]);
    setstart_date(e[3]);
    setend_date(e[4]);
    setrate(e[5]);
    setre_rates(e[5]);
    setshow(false);
  }
  const additem = () => {
    if(name=="" && rate==""){
       console.log(10);
    }
    else{
      setsale({ a: name, b: qty, c: user_quantity, d: start_date, e: end_date, f: rate });
      setname([]);
      setrate([]);
      setend_date([]);
      setstart_date([]);
      setuser_quantity("");
    }
  }
  const [user_quantity, setuser_quantity] = useState("");
  const select_updatedata = (e) => {
    setuser_quantity(e.target.value);
  }
  if (user_quantity === "Box") {
    rate = rate * 100;
  }
  if (user_quantity === "Strip") {
    rate = rate * 10;
  }
  const qtydata = (e) => {
    var productqty = e.target.value;
    rate = rate * productqty;
    if (rate == 0) {
      rate = re_rates;
    }
    setqty(productqty);
    setrate(rate);
  }
  const [total, settotal] = useState(0);
  useEffect(() => {
    settotal(sale.reduce((acc, curr) => acc + parseInt(curr.tabletrate), 0));
  }, [sale])


  return (
    <>
      <div className='body-overall'>
        <div className='bill-box'>
          <div className='head-line'></div>

          <div className='input-box'>
            <input type="text" name="" onClick={() => setshow(true)} onChange={(e) => setsearch(e.target.value)} placeholder='Search Item' id="" />
          </div>
          <div className='item-box'>
            <form action="">
            <input type="text" placeholder='Name' value={name}  name="" id=""  required/>
            <input type="text" placeholder='Amonut' value={rate} name="" id="" required/>
            <input type="text" placeholder='QTV' onChange={(e) => qtydata(e)} name="" required id="" />
            <select name="" onChange={select_updatedata} id="">
              <option value="">Select</option>
              <option value="Unit">Unit</option>
              <option value="Strip">Strip</option>
              <option value="Box">Box</option>
            </select>
            <button onClick={() => additem()} className='add-item'>Add</button>
            </form>
          </div>

          {/* table */}
          <h4>Sales rate</h4>
          <table>
            <thead>
              <tr>
                {
                  head.map((he, i) => (
                    <th key={i}>{he}</th>
                  ))
                }
              </tr>
            </thead>

            <tbody>
              {
                sale.map((maps) => (
                  <tr key={maps.id}>
                    <td>{maps.tabletname}</td>
                    <td>{maps.tabletqty}</td>
                    <td>{maps.tabletunit}</td>
                    <td>{maps.tabletstart}</td>
                    <td>{maps.tabletend}</td>
                    <td>{maps.tabletrate}</td>
                  </tr>
                ))
              }
            </tbody>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>{total}</td>
            </tr>
          </table>
        </div>
      </div>
      {
        (show) ? (
          <table className='search-table'>
            <tbody>
              {cart.slice(1).filter((item) => {
                return search.toLowerCase() === "" ? item : item[0].toLowerCase().includes(search.toLowerCase());
              }).map((cl, i) => (
                <tr className='search-tr td' onClick={() => handles(cl)} key={i}>
                  {cl.map((c, l) => (
                    <td className='search-tr' key={l}>{c}</td>

                  ))}
                </tr>
              ))}
            </tbody>

          </table>) : (<td></td>)
      }
      <button className='clear'>clear</button>

    </>
  )
}
