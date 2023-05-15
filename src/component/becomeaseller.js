import React from 'react'
import '../component css/becomeaseller.css'
import Footer from './footer'

const BecomeASeller = () => {
    return (
        <div className='container-fluid'>
            <div className="row mt-5">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* <a class="navbar-brand" href="#"><i className='fa fa-shopping-cart'></i> Cart <br /> Seller Hub</a> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-success" aria-current="page" href="#">Free Structure</a>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link text-success" href="#">Services</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link text-success">Resource</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-success">FAQs</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <button class="btn btn-outline-success" type="submit">Start Selling</button>
                                {/* <button class="btn btn-outline-success mx-2" type="submit">Login</button> */}
                            </form>
                        </div>
                    </div>
                </nav>
                {/* ---- */}
                <div className='row mt-5'>
                    <div className='col-lg-4 text-center '>
                        <p className='fs-4'>Launch Your Business in <br />10 Minit</p>
                        <nav class="navbar">
                            <form class="container-fluid">
                                <div class="input-group">
                                    <span class="input-group-text" id="basic-addon1"><i className='fa fa-phone'></i></span>
                                    <input type="text" class="form-control" placeholder="Mobile Number................" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                            </form>
                        </nav>
                        <button className='btn btn-warning mt-3'>Start Selling</button>
                    </div>
                    <div className='col-lg-8 text-center'>
                        <p className='fs-4 text-warning'>Sell Online to<br />  5 carore+ Customers <br />10 Minit</p>
                        <i className='fa fa-handshake-o mx-5 mt5 fs-3 text-success'></i>
                        <i className='fa fa-line-chart mx-5 fs-3 text-success'></i>
                        <i className='fa fa-heartbeat mx-5 fs-3 text-success '></i>
                        <i className='fa fa-key mx-5 fs-3 text-success'></i>
                    </div>
                </div>
                {/* -------- */}
                <div className='row mt-5'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-2'>
                        <a href="#" className='fs-5 text-success'>WHY SELL ONLINE</a><br /><br />
                        <span className='dot mx-5'><span className='mx-3 fs-5 text-black dot1'>1</span></span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h5 className='text-danger'>Growth in the online retail market</h5>
                        <br />
                        <p>Witnessing tremendous growth for the past<br /> 5 years, retailers are moving towards online<br /> selling.</p>
                        <br />
                        <br />
                        <input type='radio' name="sbc" /> Avoid huge investments.<br />
                        <input type='radio' name="sbc" /> Large customer base to sell online anywhere.
                    </div>
                    <div className='col-lg-2'>
                        <a href="#" className='fs-5 text-success'>WHY CARD ?</a><br /><br />
                        <span className='dot mx-5'><span className='mx-3  fs-5 text-black dot1'>2</span></span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h5 className='text-danger'>Get orders across India</h5>
                        <br />
                        <p>Receive orders from every part of the<br /> country and follow the simple steps to fulfill the orders.</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <input type='radio' name="sbc" /> Simple dashboard<br />
                        <input type='radio' name="sbc" /> Sale events, advertising and promotions
                    </div>
                    <div className='col-lg-2'>
                        <a href="#" className='fs-5 text-success'>WHY SHOPSY</a><br /><br />
                        <span className='dot mx-5'><span className='mx-3 fs-5 text-black dot1'>3</span></span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h5 className='text-danger'>Ship with ease</h5>
                        <br />
                        <br />
                        <p>Enjoy easy pick-up and delivery across India with Ekart, our logistics partner.</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <input type='radio' name="sbc" /> Efficient pick-up network<br />
                        <input type='radio' name="sbc" /> Professional packaging support
                    </div>
                    <div className='col-lg-2'>
                        <a href="#" className='fs-5 text-success'>HOW TO BE A SELLER</a><br /><br />
                        <span className='dot mx-5'><span className='mx-3 fs-5 text-black dot1'>4</span></span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h5 className='text-danger'>Earn big</h5>
                        <br />
                        <br />
                        <p>Our payments process is the fastest in the industry - get your payments in as little as 7 days of sales.</p>
                        <br />
                        <br />
                        <br />

                        <input type='radio' name="sbc" /> Fastest payment settlement <br />
                        <input type='radio' name="sbc" /> Detailed reports to track your payments
                    </div>
                    <div className='col-lg-2'></div>
                </div>
                {/* ------- */}
                <div className='col-lg-12 text-center mt-5 learnmore'>
                    <a href='#' className='fs-5'>Learn More</a>
                </div>
                <footer className='text-center mt-5  bg-dark'>
                    <p className='text-white mt-2'>Avail 0% Commision for Selling on Shopsy </p>
                    <a href="#" className='knowmore fs-5'>Know More</a>
                </footer>
                <div className='row'>
                    <h5 className='text-center mt-5 text-success fs-4'>More tools to grow faster</h5>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-3'>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title"><i className='fa fa-truck'></i></h5>
                                <h5 class="card-subtitle mb-2 text-black">Fulfillment by Flipkart (FBF)</h5>
                                <p class="card-text"> Worried about storing, packing, shipping, and delivering your products? Let cart do it all for you with FBF, a one stop solution for all your shipping needs.</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title"><i className='fa fa-truck'></i></h5>
                                <h5 class="card-subtitle mb-2 text-black">Cart Ads</h5>
                                <p class="card-text"> Curious how your products will stand out from your competitors and gain maximum visibility? Flipkart Ads will help you achieve your online selling business goals.</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title"><i className='fa fa-truck'></i></h5>
                                <h5 class="card-subtitle mb-2 text-black">Shopping Festivals</h5>
                                <p class="card-text"> Get access to India’s biggest shopping festivals, The Big Billion Day, Big Diwali Sale, and more. Participate in these festivals to see your business grow by up to 5X.</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title"><i className='fa fa-truck'></i></h5>
                                <h5 class="card-subtitle mb-2 text-black">Cart Seller Hub App</h5>
                                <p class="card-text"> Manage your online seller account 24x7 with Flipkart Seller Hub App, compatible with all iOS & Android devices.</p>

                            </div>
                        </div>
                    </div>
                </div>
                {/* --- */}
                <div className='row'>
                    <div className='col-lg-12 text-center mt-5'>
                        <button className='btn btn-warning '>Start Selling</button>
                    </div>

                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <Footer/>
        </div>
    )
}

export default BecomeASeller
