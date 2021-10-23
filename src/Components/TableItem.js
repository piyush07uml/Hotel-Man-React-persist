import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { updateQuantity, deleteFromTable } from '../redux/Action/menuAction';


const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' }
]


class TableItem extends React.Component {

    state = {
        selectedOption: {}
    }


    componentWillMount() {
        const { itm, tableItem } = this.props;
        itm.quantity.toString()
        this.setState({
            selectedOption: { value: itm.quantity, label: itm.quantity }
        })
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    updateQuantity = () => {
        const { value: quantity } = this.state.selectedOption;
        const { itm, tableItem } = this.props

        this.props.updateQuantity(quantity, tableItem.id, itm.id)


    }


    render() {
        const { itm, tableItem } = this.props
        return (
            <div className="container row mb-2 d-flex justify-content-around">
                <p className="col-md-3 orange-text">{itm.name.toUpperCase()}</p>
                <p className="col-md-2 blue-text">Size: {itm.size}</p>

                <div className="col-md-4 d-flex">
                    <label className="pr-2 blue-text">Quantity:</label>
                    <Select
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        style={{ width: 200 }}

                    />
                    <button className="btn btn-primary ml-3 mb-3 button-size" onClick={this.updateQuantity}>Update</button>
                </div>

                <p className="col-md-2 blue-text">price: {'\u20B9'}{(itm.price * itm.quantity).toFixed(2)}</p>

                <div className="col-md-1 margin-top">
                    <i className="fas fa-times text-muted" onClick={() => this.props.deleteFromTable(itm.id, tableItem.id)}></i>
                </div>


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tableList: state.menu.tableList
    }
}


export default connect(mapStateToProps, { updateQuantity, deleteFromTable })(TableItem)