import React from 'react'
import { useEffect, useState } from 'react'
import Footer from './footer'
// import Carousel from './carousel'
import { Link } from 'react-router-dom'
const Product = () => {

    const [product, updateproduct] = useState([])

    const FetchData = () => {
        fetch("http://localhost:1234/product")
            .then(Response => Response.json())
            .then(productarray => {
                updateproduct(productarray)
            })
    }
    useEffect(() => {
        FetchData()
    }, [1])
    //    ---
    const [msg, updateMessage] = useState("");
    const AddtoCart = (productinfo) => {
        const postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productinfo)
        };
        var url = "http://localhost:1234/cart";
        fetch(url, postData)
            .then(response => response.json())
            .then(serverResponse => {
                updateMessage(serverResponse.title + " Added In Cart");
            })
    }
    return (
        <>
            <section className="bg-light p-0">
               
                {/* <p className="text-center text-danger">{msg}</p> */}
                <div className="container-fluid">
                    {/* <Carousel /> */}
                    <p className="text-center text-danger mt-5 fs-5">{msg}</p> 
                    <div className="row mt-5">
                    
                        {
                            product.map((pdata, index) => {

                                return (
                                    <div className="col-lg-3 mb-5" key={index}>
                                        <div className=" rounded p-3 shadow">
                                            <h4 className="text-center text-primary">{pdata.title}</h4>
                                            <img src={pdata.images} height="190" width="100%" />

                                            <p className='fs-5'>Brand : {pdata.brand}</p>
                                            <p className='fs-5'>category : {pdata.category}</p>
                                            <p className='fs-5'>Rs.{pdata.price}/-</p>
                                            <p className='text-danger fs-6'>Rs.{pdata.discountPercentage}/-</p>
                                            <div className="text-center">
                                                <button className="btn btn-danger btn-sm"
                                                    onClick={AddtoCart.bind(this, pdata)}>
                                                    <i className="fa fa-shopping-cart"></i> Add To Cart
                                                </button>
                                                <Link to="/cart"><button className='btn btn-warning mx-2'><i className='fa fa-shopping-cart'></i></button></Link>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* -------- */}
                    
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product
