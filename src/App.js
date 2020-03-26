import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import ProductList from "./components/product-list.component";
import CreateProduct from "./components/create-product.component";
import EditProduct from "./components/edit-product.component";

function App() {
    return (
        <Router>
            <Navbar/>
            <br/>
            <Route path="/" exact component={ProductList}></Route>
            {/* <Route path="/productList" exact component={ProductList}></Route> */}
            <Route path="/createProduct" component={CreateProduct} /> 
            <Route path="/editProduct/:id" component={EditProduct} />
        </Router>
    );
}

export default App;
