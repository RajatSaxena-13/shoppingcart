import React from 'react'
import img1 from '../img/16.png'
import img2 from '../img/13.jpg'
import img3 from '../img/14.jpg'
import img4 from '../img/20.jpg'
import { Link } from 'react-router-dom'
import Footer from './footer'
import { useEffect, useState } from 'react'


const BuyNowAddress = () => {

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

    //    ---
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
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div id="carouselExampleFade" class="carousel slide carousel-fade">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={img1} height="500" width="100%" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img2} height="500" width="100%" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img3} height="500" width="100%" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-lg-5 mt-2'>
                    <ul class="nav nav-underline">
                        <li class="nav-item">
                            <Link to="/buynowlogin"><a class="nav-link active" aria-current="page" href="#">Login</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/buynowaddress"><a class="nav-link " href="#">Address</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/buynowcoupen"><a class="nav-link " href="#">Coupens</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/buynowpayment"><a class="nav-link " href='#'>Payment</a></Link>
                        </li>
                    </ul>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <li class="list-group-item"><span className='font-weight-bold '>Name : </span><input type="text" className='form-control' placeholder='Name.....' /></li>
                            <li class="list-group-item"><span className='font-weight-bold '>Number : </span> <input type="number" className='form-control' placeholder='000-000-0000' /></li>
                            <li class="list-group-item"><span className='font-weight-bold '>Pincode : </span> <input type="number" className='form-control' placeholder='00-00-00' /></li>
                            <li class="list-group-item"><span className='font-weight-bold '>Locality : </span> <input type="text" className='form-control' placeholder='Locality.....' /></li>
                            <li class="list-group-item"><span className='font-weight-bold '>Address : </span> <textarea type="text" className='form-control' placeholder='Address.....' /></li>
                            <li class="list-group-item">  <input type="text" className='form-control' placeholder='City/District/Town.....' /></li>
                            <li class="list-group-item">
                                <select class="form-select">
                                    <option selected>--Select State</option>
                                    <option value="1">Madhya Pradesh</option>
                                    <option value="2">Uttar Pradesh</option>
                                    <option value="3">Three</option>
                                </select>
                            </li>
                            <li class="list-group-item"><p className='font-weight-bold '>Address type</p>
                                <input type='radio' name='abc' /> Home (All Day Delivery)<br />
                                <input type='radio' name='abc' /> Work (Delivery between 10AM to 5PM)
                            </li>
                            <li class="list-group-item"><button className='btn btn-warning'>Save And Delivery Here</button></li>
                        </div>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <table className='table table-bordered table-hover m-0 mt-5'>
                        <thead>
                            <tr className='text-center'>
                                <th>Product Image</th>
                                <th> Name</th>
                                <th> Description</th>
                                <th> Price</th>
                                <th>Quantity</th>
                                <th>Discount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                product.map((pinfo, index) => {
                                    return (
                                        <tr className='text-center'>
                                           
                                            <td><img src={pinfo.images} height="" width="25%" /></td>
                                            <td className='font-weight-bold font-italic'> {pinfo.title}</td>
                                            <td className='font-weight-bold font-italic'> {pinfo.description}</td>
                                            <td className='font-weight-bold font-italic'>   {pinfo.price}/--Rs</td>
                                            <td className='font-weight-bold font-italic'>   {pinfo.quantity}</td>
                                            <td className='font-weight-bold font-italic text-danger'>  {pinfo.discountPercentage}</td> 
                                             <td>
                                                <button className='btn btn-danger'
                                                onClick={Deletepro.bind(this, pinfo.id)}><i className='fa fa-trash'></i> Delete</button>
                                             </td>
                                        </tr>
                                    )
                                })
                            }

                            {/* {
                                product.map((pinfo, index) => {
                                    return (
                                        <div className="col-lg-3 mb-5  text-center" key={index}>
                                            <div className=" rounded p-3">

                                                <img src={pinfo.images} height="" width="100%" />


                                                <div className="text-center">

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            } */}
                        </tbody>
                    </table>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BuyNowAddress
