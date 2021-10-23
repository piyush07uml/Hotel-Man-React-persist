import { ADD_TO_MENU, DELETE_FROM_MENU, EDIT_MENU, ADD_TO_TABLE, DELETE_FROM_TABLE, UPDATE_QUANTITY, CLEAR, ADD_TABLE, REMOVE_TABLE } from './ActionTypes';



export const AddToMenuList = (item) => {
    return {
        type: ADD_TO_MENU,
        item
    }
}

export const DeleteFromMenuList = (id) => {
    return {
        type: DELETE_FROM_MENU,
        id
    }
}

export const EditMenuList = (item) => {
    return {
        type: EDIT_MENU,
        item
    }
}

export const AddToTable = (item, id) => {
    return {
        type: ADD_TO_TABLE,
        item,
        id
    }
}

export const deleteFromTable = (id, tableId) => {
    return {
        type: DELETE_FROM_TABLE,
        id,
        tableId
    }
}


export const updateQuantity = (quantity, tableId, id) => {
    return {
        type: UPDATE_QUANTITY,
        quantity,
        tableId,
        id
    }
}

export const clear = (id) => {

    return {
        type: CLEAR,
        id
    }
}


export const addTable = (tableItem) => {
    return {
        type: ADD_TABLE,
        tableItem
    }
}


export const removeTable = (id) => {
    return {
        type: REMOVE_TABLE,
        id
    }
}