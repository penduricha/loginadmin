import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import LoginScreen from './loginScreen/LoginScreen';
//import ShoppingCart from "./clothScreen/ShoppingCart";
import StoreScreen from "./store/StoreScreen";
import ClothingScreen from "./clothing/ClothingScreen";
//mport Car from "./car/Car";

import Product from "./car/Product";
import './App.css';

const App = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" exact to="/" activeClassName="active">Trang chủ</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/store" activeClassName="active">Thông tin cửa
                                    hàng</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/clothing" activeClassName="active">Thông tin quần
                                    áo</NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product" activeClassName="active">Thông tin Product</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<LoginScreen/>}/>
                <Route path="/store" element={<StoreScreen/>}/>
                <Route path="/clothing" element={<ClothingScreen/>}/>
                <Route path="/product" element={<Product/>}/>

            </Routes>
        </Router>
    );
};

export default App;
//<Route path="/product" element={<Product/>}/>

//<LoginScreen/>
//
//<LoginScreen/>
// <ShoppingCartTable/>
//<ShoppingCart/>
