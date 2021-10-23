import React from 'react';
import { connect } from 'react-redux';
import TableList from './TableList';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import { addTable } from '../redux/Action/menuAction'





class Table extends React.Component {



    addTable = () => {
        const tableItem = {
            id: uuid(),
            list: [],
            totalBill: 0
        };

        this.props.addTable(tableItem);

    }



    render() {
        const { tableList } = this.props
        return (

            <div>
                <div className="bg-light sticky-top" >
                    <div className="container d-flex">
                        <h1 className="mt-2 ml-3 text-info flex-grow-1">Table</h1>
                        <Link to="/" className="btn btn-primary m-3">Go To Menu List</Link>
                        <button className="btn btn-primary m-3" onClick={this.addTable}>Add Table</button>

                    </div>

                </div>

                <div className="mt-5">
                    {tableList.map((itm, i) => {
                        const num = i + 1
                        return <TableList key={itm.id} tableItem={itm} num={num} />
                    })}
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

export default connect(mapStateToProps, { addTable })(Table)