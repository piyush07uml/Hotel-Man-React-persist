import React from 'react';
import Select from 'react-select';
import { DeleteFromMenuList, AddToTable } from '../redux/Action/menuAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import SweetAlert from "react-bootstrap-sweetalert";

const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' }
]

let options1 = []




class MenuList extends React.Component {

    state = {
        selectedOption: { value: '1', label: '1' },
        selectedOption1: {},
        alert: false
    }


    componentWillMount() {
        options1 = []
        const { tableList } = this.props

        tableList.map((itm, i) => {
            const label = i + 1;
            label.toString();
            const value = itm.id;
            options1 = [...options1, { value, label }]

        });

        const firstId = tableList[0].id;
        this.setState({
            selectedOption1: { value: firstId, label: '1' }
        })
    }


    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    handleChange1 = (selectedOption1) => {
        this.setState({ selectedOption1 });
        console.log(`Option selected:`, selectedOption1);
    }

    addItem = () => {
        let { name, size, price, id } = this.props.menuItem;
        let { value: quantity } = this.state.selectedOption;
        let { value: itemId } = this.state.selectedOption1;
        parseInt(quantity);
        console.log('price', typeof (price))
        const item = { id: uuid(), uid: id, name, size, price, quantity }

        this.props.AddToTable(item, itemId)

        this.setState({ alert: true })

    }

    hideAlert = () => {
        this.setState({ alert: false })
    }

    render() {

        let { name, size, price, id } = this.props.menuItem;

        return (
            <div className="container">
                {this.state.alert ? < SweetAlert title="Item Added To The Table" onConfirm={this.hideAlert} /> : null}



                <div style={{ backgroundColor: "#fff" }} className="row border m-3 p-4 border-info">

                    <div className="col-md-5">

                        <div className="menuItem row">
                            <p className="col-md-5 orange-text big-text"
                            >{name.toUpperCase()}</p>

                            <p className="col-md-3 blue-text"
                            >Size: {size}</p>

                            <p className="col-md-4  blue-text"
                            >Price: {'\u20B9'}{(price * 1).toFixed(2)}</p>
                        </div>

                    </div>



                    <div className="col-md-2 selectWrapper">
                        <label className="pr-2 blue-text flex-1">Quantity:</label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            className="select"
                        />
                    </div>

                    <div className="col-md-2 selectWrapper">
                        <label className="pr-2 blue-text" >Table:</label>
                        <Select
                            value={this.state.selectedOption1}
                            onChange={this.handleChange1}
                            options={options1}
                            className="select"
                        />

                    </div>

                    <div className="col-md-1 ">
                        <button className="btn btn-primary" onClick={this.addItem}>Add</button>
                    </div>

                    <div className="col-md-1 ">

                        <Link to={{
                            pathname: '/editmenu',
                            state: {
                                name,
                                price,
                                size,
                                id
                            }
                        }}
                        ><i className="fas fa-edit fa-2x text-secondary"></i></Link>
                    </div>


                    <div className="col-md-1 ">
                        <i className="fas fa-trash fa-2x text-secondary" onClick={() => this.props.DeleteFromMenuList(id)}></i>
                    </div>


                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tableList: state.menu.tableList
    }
}


export default connect(mapStateToProps, { DeleteFromMenuList, AddToTable })(MenuList)