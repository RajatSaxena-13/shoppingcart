import React from 'react'
import '../component css/navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><i className='fa fa-shopping-cart'></i> Shopping-Cart</a>
                    <div className='col-lg-5'>
                        <nav className="navbar bg-body-tertiary">
                            <form className="container-fluid">
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"><i className='fa fa-search'></i></span>
                                    <input type="text" className="form-control" placeholder="Search Product.........." aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </form>
                        </nav>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to = "/product"><a className="nav-link active" aria-current="page" href="#">Product</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to = "/becomeaseller"><a className="nav-link" href="#">Become a Seller</a></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><i className='fa fa-bell'></i> Notification Preferences</a></li>
                                    <li><a className="dropdown-item" href="#"><i className='fa fa-line-chart'></i> Advertise</a></li>
                                    <li><a className="dropdown-item" href="#"><i className='fa fa-download'></i> Download App</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <Link to = "/login"><button className="btn btn-outline-success button1 fs-6" type="submit">Login</button></Link>
                            <Link to = "/cart"><button className="btn btn-outline-success mx-3 button1 fs-5" type="submit"><i className='fa fa-shopping-cart'></i></button></Link>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <Product/> */}
        </>
    )
}

export default Navbar
