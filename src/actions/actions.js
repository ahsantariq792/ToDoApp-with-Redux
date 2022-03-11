export const AddItem = (data) => {
    return {
        type : "ADD_ITEM",
        payload: {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

export const DeleteItem = () => {
    return {
        type : "DELETE_ITEM"
    }
}


export const RemoveItem = () => {
    return {
        type : "REMOVE_ITEM"
    }
}