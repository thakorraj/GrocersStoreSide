import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = props => (
    <tr>
      <td>{props.product[0].product[0].pname}</td>
      <td>{props.product.fk_store_id}</td>
       <td>{props.product.fk_user_id}</td>
      
      

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
            console.log(this.state.product[0].product[0].pname);
            console.log(this.state.product[0].product[1].pname);
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
    render(){
        return(
            <div>
            <h3>All Product</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  
                  
                </tr>
              </thead>
              <tbody>
                { this.productlist() }
              </tbody>
            </table>
          </div>
        )
    }
}