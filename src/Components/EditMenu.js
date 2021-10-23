import React from 'react';
import { connect } from 'react-redux';
import { EditMenuList } from '../redux/Action/menuAction';
import { Link } from 'react-router-dom';
import SweetAlert from "react-bootstrap-sweetalert";



class AddMenu extends React.Component {

    state = {
        name: undefined,
        size: undefined,
        price: undefined,
        alert: false,
        status: null
    }

    componentWillMount() {
        const { name, size, price } = this.props.location.state;
        this.setState({
            name, size, price
        })
    }



    editMenu = (e) => {
        e.preventDefault();
        const { name, size, price } = this.state;

        if (name === '' || size === '' || price === '') {
            this.setState({ status: "All Fields Are Required" })
            return;
        }

        const id = this.props.location.state.id
        const item = { id, name, size, price }

        this.props.EditMenuList(item)
        this.setState({ alert: true })

    }

    onChangeHandler = (e) => {

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
                        <h1 className="mt-2 ml-3 text-info flex-grow-1">Edit Menu</h1>
                        <Link to="/" className="btn btn-primary m-3"> Menu</Link>
                        <Link to="/table" className="btn btn-primary m-3">Table</Link>
                    </div>

                </div>

                <div className="container mt-5">

                    {this.state.alert ? < SweetAlert title="Item Edited Successfully!" onConfirm={this.hideAlert} style={{ color: 'green' }} /> : null}


                    <div className="container">

                        <form onSubmit={this.editMenu}>
                            <div className="form-group">
                                <label htmlFor="name" className="text-primary">Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="name" name="name"
                                    defaultValue={this.state.name}
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="size" className="text-primary">Size</label>
                                <input type="text" className="form-control" id="size"
                                    name="size"
                                    defaultValue={this.state.size}
                                    onChange={this.onChangeHandler} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price" className="text-primary">Price</label>
                                <input type="number" className="form-control" id="price"
                                    name="price"
                                    defaultValue={this.state.price}
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

export default connect(null, { EditMenuList })(AddMenu);