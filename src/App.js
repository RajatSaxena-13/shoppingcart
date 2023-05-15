import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Product from './component/product';
import Cart from './component/cart';
import BecomeASeller from './component/becomeaseller';
import Login from './component/login';
import Buynow from './component/buynow';
import BuyNowLogin from './component/buynowlogin';
import BuyNowAddress from './component/buynowaddress';
import BuyNowCoupen from './component/buynowcoupen';
import BuyNowPayment from './component/buynowpayment';

function App() {
  return (
    <HashRouter>
      <Navbar/>
      {/* <Product/> */}
      {/* <Product/> */}
      <Routes>
      <Route exact path = "/navbar" element={<Navbar/>}/>
      <Route exact path = "/product" element={<Product/>}/>
      <Route exact path = "/becomeaseller" element={<BecomeASeller/>}/>
      <Route exact path = "/login" element={<Login/>}/>
      <Route exact path = "/cart" element={<Cart/>}/>
      <Route exact path = "/buynow" element={<Buynow/>}/>
      <Route exact path = "/buynowlogin" element={<BuyNowLogin/>}/>
      <Route exact path = "/buynowaddress" element={<BuyNowAddress/>}/>
      <Route exact path = "/buynowcoupen" element={<BuyNowCoupen/>}/>
      <Route exact path = "/buynowpayment" element={<BuyNowPayment/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
