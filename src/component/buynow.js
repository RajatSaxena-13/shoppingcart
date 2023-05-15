import React from 'react'
import img1 from '../img/17.png'
import img2 from '../img/13.jpg'
import img3 from '../img/14.jpg'
import {Link} from 'react-router-dom'
import Footer from './footer'
const Buynow = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div id="carouselExampleFade" class="carousel slide carousel-fade">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={img1} height="500" width="100%" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={img2} height="500" width="100%" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={img3} height="500" width="100%" alt="..."/>
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
                           <Link to = "/buynowlogin"><a class="nav-link active" aria-current="page" href="#">Login</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to = "/buynowaddress"><a class="nav-link " href="#">Address</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to = "/buynowcoupen"><a class="nav-link " href="#">Coupens</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to = "/buynowpayment"><a class="nav-link " href='#'>Payment</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Buynow
