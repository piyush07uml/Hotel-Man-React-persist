import React from 'react';
import { connect } from 'react-redux';
import MenuList from './MenuList';
import { Link } from 'react-router-dom'





class Menu extends React.Component {

    state = {
        search: ''
    }


    onChangeHandler = (e) => {
        this.setState({ search: e.target.value.substr(0, 20) })
    }



    render() {

        let filteredMenu = this.props.menu.filter((itm) => {
            return itm.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })



        return (

            <div>

                <div className="sticky-top mb-5">

                    <div className="bg-light">
                        <div className="container d-flex align-items-center" >
                            <h1 className="mt-2 ml-3 text-info  " >Menu</h1>

                            <div className="container  ">
                                <div className="input-group mt-5 mb-5 container">
                                    <input type="text" className="form-control" placeholder="Search Menu..." aria-label="Recipient's username" aria-describedby="basic-addon2"
                                        value={this.state.search}
                                        onChange={this.onChangeHandler}
                                    />
                                    <div className="input-group-append" >
                                        <span className="input-group-text" id="basic-addon2">Search</span>
                                    </div>
                                </div>

                            </div>

                            <Link to="/addmenu" className="btn btn-primary button-size-big m-3">Add Menu</Link>
                            <Link to="/table" className="btn btn-primary button-size-big m-3">Tables</Link>
                        </div>


                    </div>

                    {/* <div className="container  ">
                        <div className="input-group mt-5 mb-5 container">
                            <input type="text" className="form-control" placeholder="Search Menu..." aria-label="Recipient's username" aria-describedby="basic-addon2"
                                value={this.state.search}
                                onChange={this.onChangeHandler}
                            />
                            <div className="input-group-append" >
                                <span className="input-group-text" id="basic-addon2">Search</span>
                            </div>
                        </div>

                    </div> */}

                </div>






                {filteredMenu.map((itm, i) => {
                    return <MenuList menuItem={itm} key={itm.id} num={i} />
                })}

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu.menuList,
        tableList: state.menu.tableList
    }
}


export default connect(mapStateToProps)(Menu);