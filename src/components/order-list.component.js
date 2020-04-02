import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Product = props => (
    <tr>
      {/* <td>{props.product[0].product[0].pname}</td> */}
      <td>
      {Object.keys(props.product.product).map((obj, i) => {
      return (
         <p>
        <p>Name:{props.product.product[obj].pname}</p>
        <p>Quantity:{props.product.product[obj].quantity}</p>  
        <p>Price:{props.product.product[obj].amount}</p>
        <br></br>

        </p> 
      )})}</td>
      
       <td>{props.product.fk_user_id}</td>
      
      

    </tr>
  )

  const Product1 = props => (
    <tr>
      {/* <td>{props.product[0].product[0].pname}</td> */}
      <td>{props.product.pname}</td>
       <td>{props.product.quantity}</td>
      
      

    </tr>
  )

export default class ProductList extends Component
{
    constructor(props)
    {
     super(props);
     
        this.state={
            product:[]
    
        };

    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/orders')
        .then(res=>{
            this.setState({
                product:res.data
                
            })
            console.log(this.state.product[0].product[1]);
            //console.log(this.state.product[0].product[1].pname);
        })
        .catch((error)=>{
            console.log(error);
        });
       
        
    }

    productlist()
    {
        return this.state.product.map(currentproduct => {
            return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>;
          })
    }
    productPlist()
    {
        return this.currentproduct.product.map(currentproduct1 => {
            return <Product1 product={currentproduct1}  key={currentproduct1._id}/>;
          })
    }


    render(){
        return(
            <div>
            <h3>All Product</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Orders</th>
                  <th>User</th>
                  
                  
                </tr>
              </thead>
              <tbody>
                { this.productlist() }
                {/* {console.log(this.productPlist())} */}
              </tbody>
            </table>
          </div>
        )
    }
}