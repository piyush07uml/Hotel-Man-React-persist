import React from 'react';
import { connect } from 'react-redux';
import { deleteFromTable, clear, removeTable } from '../redux/Action/menuAction';
import Select from 'react-select';
import TableItem from './TableItem';


// const options = [
//     { value: '1', label: '1' },
//     { value: '2', label: '2' },
//     { value: '3', label: '3' },
//     { value: '4', label: '4' }
// ]


class TableList extends React.Component {

    // state = {
    //     selectedOption: {}
    // }



    // handleChange = (selectedOption) => {
    //     this.setState({ selectedOption });
    //     console.log(`Option selected:`, selectedOption);
    // }




    render() {

        const { tableItem, num } = this.props

        return (
            <div className="container">
                {/* <div className="m-4 mb-6"> */}


                <div className="accordion mt-5 " id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0 d-flex">
                                <button className="btn btn-link mr-auto p-2" type="button" data-toggle="collapse" data-target={`#collapse${tableItem.id}`} aria-expanded="true" aria-controls={`collapse${tableItem.id}`}>
                                    <h3> Table {num}</h3>
                                </button>



                                <button className="btn  btn-secondary m-3 p-2" onClick={() => this.props.clear(tableItem.id)}>{tableItem.totalBill == 0 ? "Cleared" : "Clear Bill"}</button>

                                <button className="btn btn-secondary m-3 p-2" onClick={() => this.props.removeTable(tableItem.id)}>Remove Table</button>

                            </h2>
                            <h3 className="bill-text-lg">Total Bill:-{'\u20B9'}{tableItem.totalBill.toFixed(2)}</h3>
                        </div>

                        <div id={`collapse${tableItem.id}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body overflow-auto">
                                {tableItem.list.map((itm) => {
                                    return <TableItem itm={itm} key={itm.id} tableItem={tableItem} />
                                })}
                                <h4 className="bill-text-sm">Total Bill:-{'\u20B9'}{tableItem.totalBill.toFixed(2)}</h4>
                            </div>
                        </div>
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


export default connect(mapStateToProps, { deleteFromTable, clear, removeTable })(TableList);