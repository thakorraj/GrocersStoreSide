import React, {Component} from 'react';

import axios from 'axios';


export default class CreateProduct extends Component {

    constructor(props) {
        super(props);


        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            pname: "",
            amount: 0
        }


    }

    onChangeName(e) {
        this.setState({
            pname: e.target.value
        })
    }

    onChangeAmount(e) {
        this.setState({
            amount: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.pname);
        const product = {

            pname: this.state.pname,
            amount: this.state.amount,
            fk_store_id: "2"

        }

        // console.log(store);
        axios.post('http://localhost:5000/api/products', product)
            .then(res => console.log(res.data));
        //this will send to home page
        window.location="/";
    }

    render() {
        return (
            <div>
                <h3>Add New Store</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.pname}
                               onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Amount: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.amount}
                            onChange={this.onChangeAmount}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Store" className="btn btn-primary"/>
                    </div>
                </form>
            </div>

        )
    }
}