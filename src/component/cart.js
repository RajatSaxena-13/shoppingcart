import React, { useContext, useReducer } from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Cart = () => {

  // -------
  const [product, updateproduct] = useState([])
  const getCart = () => {
    fetch("http://localhost:1234/cart")
      .then(response => response.json())
      .then(allproduct => {
        if (allproduct.length > 0) {
          updateproduct(allproduct);
        }
      })
  }
  useEffect(() => {
    getCart();
  }, [true]);
  // ------
  const [msg, updateMessage] = useState("");
  const Deletepro = (pid) => {
    const postData = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "id": pid })
    };
    var url = "http://localhost:1234/cart/" + pid;
    fetch(url, postData)
      .then(response => response.json())
      .then(serverResponse => {
        updateMessage("Item Deleted From Cart");
        updateproduct([]);
        getCart();
      })
  }
  // -------
const Selectitem = (productinfo) =>{
  const postData = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productinfo)
};
var url = "http://localhost:1234/post";
fetch(url, postData)
    .then(response => response.json())
    .then(serverResponse => {
        alert(serverResponse.title + " Added In Cart");
    })
}
  return (
    <section className='contaner'>
      <div className='row'>
        <div className='col-lg-12'>
          <table className='table table-light table-hover m-0 mt-5'>
            <thead>
              <tr className='text-center'>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Quentity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {
                product.map((pinfo, index) => {
                  return (
                    <tr key={index}>
                      <img src={pinfo.images} height="80" width="50%" />
                      <td className='font-weight-bold font-italic'> {pinfo.title}</td>
                      <td className='font-weight-bold font-italic'> Title : {pinfo.price}/--Rs</td>
                      <td>
                        
                        <button className='btn btn-danger' >-</button>
                        <button className='btn btn-danger mx-2' >0</button>
                        <button className='btn btn-danger' >+</button>
                        
                      </td>
                      <td>
                        <button className='btn btn-danger' onClick={Deletepro.bind(this, pinfo.id)}><i className='fa fa-trash text-danger'></i>Delete</button>
                        <Link to="/buynow"><button className='btn btn-danger mx-3' > <i className='fa fa-shopping-cart text-success' 
                        onClick={Selectitem.bind(this, pinfo)}></i> Buy Now</button></Link>
                      </td>
                    </tr>
                  )
                })
              }
              
            </tbody>
          </table>
        </div>
      </div>
      <div className='col-lg-12  '>
      {
                product.map((pinfo, index) => {
                  return (
                    <tr key={index}>
                      <h5 className='font-weight-bold font-italic mt-5 mx-5'> Cart Total : {pinfo.price}/--Rs</h5>
                    </tr>
                  )
                })
              }
      </div>
    </section>
  )
}
 
export default Cart
