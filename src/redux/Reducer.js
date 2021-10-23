import { ADD_TO_MENU, DELETE_FROM_MENU, EDIT_MENU, ADD_TO_TABLE, DELETE_FROM_TABLE, UPDATE_QUANTITY, CLEAR, ADD_TABLE, REMOVE_TABLE } from './Action/ActionTypes';
import uuid from 'uuid';

const initialState = {
    menuList: [],
    tableList: [
        {
            id: uuid(),
            list: [],
            totalBill: 0
        },
        {
            id: uuid(),
            list: [],
            totalBill: 0
        },
        {
            id: uuid(),
            list: [],
            totalBill: 0
        },
        {
            id: uuid(),
            list: [],
            totalBill: 0
        },
        {
            id: uuid(),
            list: [],
            totalBill: 0
        }

    ]
}


const Reducer = (state = initialState, action) => {

    let updatedTable;
    let updatedBill = 0
    let newList;

    switch (action.type) {

        case ADD_TO_MENU:

            return {
                ...state,
                menuList: [...state.menuList, action.item]
            }

        case DELETE_FROM_MENU:

            return {
                ...state,
                menuList: state.menuList.filter((itm) => {
                    return itm.id !== action.id;
                })
            };

        case EDIT_MENU:

            const editedMenu = state.menuList.map((itm) => {
                return itm.id === action.item.id ? itm = action.item : itm

            })

            return {
                ...state,
                menuList: editedMenu
            }

        case ADD_TO_TABLE:


            updatedTable = state.tableList.map((itm) => {

                if (itm.id === action.id) {
                    itm.list = [...itm.list, action.item];

                    itm.list.map((it) => {
                        parseInt(it.price)
                        updatedBill += it.price * it.quantity
                    });
                    itm.totalBill = updatedBill

                    return itm
                } else {
                    return itm
                }
            })

            return {
                ...state,
                tableList: updatedTable
            };


        case DELETE_FROM_TABLE:

            console.log('clicked')

            updatedTable = state.tableList.map((itms) => {

                if (itms.id === action.tableId) {

                    newList = itms.list.filter((itm) => {
                        return itm.id !== action.id
                    });
                    itms.list = newList;

                    itms.list.map((it) => {
                        parseInt(it.price)
                        updatedBill += it.price * it.quantity
                    });
                    itms.totalBill = updatedBill

                    return itms
                } else {
                    return itms
                }
            })

            return {
                ...state,
                tableList: updatedTable
            }

        case UPDATE_QUANTITY:

            updatedTable = state.tableList.map((itm) => {

                if (itm.id === action.tableId) {

                    newList = itm.list.map((it) => {

                        if (it.id === action.id) {
                            it.quantity = action.quantity
                            return it
                        } else {
                            return it
                        }


                    })

                    itm.list = newList;
                    itm.list.map((it) => {
                        updatedBill += it.price * it.quantity
                    });
                    itm.totalBill = updatedBill

                    return itm

                } else {
                    return itm;
                }
            });

            return {
                ...state,
                tableList: updatedTable
            }

        case CLEAR:

            updatedTable = state.tableList.map((item) => {
                if (item.id === action.id) {
                    item.list = [];
                    item.totalBill = 0;
                    return item
                } else {
                    return item;
                }
            });

            return {
                ...state,
                tableList: updatedTable
            }

        case ADD_TABLE:


            updatedTable = [...state.tableList, action.tableItem]


            return {
                ...state,
                tableList: updatedTable
            }

        case REMOVE_TABLE:

            updatedTable = state.tableList.filter((tableItem) => {
                return tableItem.id !== action.id;
            })

            return {
                ...state,
                tableList: updatedTable
            }

        default:
            return state
    }
}



export default Reducer