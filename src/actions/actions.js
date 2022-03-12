export const AddItem = (data) => {
    return {
        type : "ADD_ITEM",
        payload: {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

export const DeleteItem = (id) => {
    return {
        type : "DELETE_ITEM",
        id
    }
}

export const RemoveItem = () => {
    return {
        type : "REMOVE_ITEM"
    }
}