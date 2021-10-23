import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { AddToMenuList } from '../redux/Action/menuAction';
import { Link } from 'react-router-dom';
import SweetAlert from "react-bootstrap-sweetalert";
import { isNumber } from 'util';



class AddMenu extends React.Component {

    state = {
        name: '',
        size: '',
        price: '',
        alert: false,
        status: null
    }



    addToMenu = (e) => {
        e.preventDefault();

        let { name, size, price } = this.state;
        parseInt(price)

        if (name === '' || size === '' || price === '') {
            this.setState({ status: "All Fields Are Required" })
            return;
        }


        const id = uuid();
        const item = { id, name, size, price }

        this.props.AddToMenuList(item)
        this.setState({ alert: true })

    }

    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    hideAlert = () => {
        this.setState({ alert: false })
    }


    render() {
        return (

            <div>

                <div className="bg-light sticky-top">
                    <div className="container d-flex">
                        <h1 className="mt-2 ml-3 text-info flex-grow-1">Add Menu</h1>
                        <Link to="/" className="btn btn-primary m-3"> Menu</Link>
                        <Link to="/table" className="btn btn-primary m-3">Table</Link>
                    </div>

                </div>



                <div className="container mt-5">

                    {this.state.alert ? < SweetAlert title="Item Added Successfully!" onConfirm={this.hideAlert} style={{ color: 'green' }} /> : null}
                    <div className="container">
                        <form onSubmit={this.addToMenu}>
                            <div className="form-group">
                                <label htmlFor="name" className="text-primary">Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter Name..."
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="size" className="text-primary">Size</label>
                                <input type="text" className="form-control" id="size" placeholder="Enter Size..."
                                    name="size"
                                    value={this.state.size}
                                    onChange={this.onChangeHandler} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price" className="text-primary">Price</label>
                                <input type="number" className="form-control" id="price" placeholder="Enter Price..."
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                            <p style={{ color: 'red' }}>{this.state.status}</p>

                            <input type="submit" className="btn btn-primary" />
                            <Link to="/" className="btn btn-primary ml-3">Back</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { AddToMenuList })(AddMenu);