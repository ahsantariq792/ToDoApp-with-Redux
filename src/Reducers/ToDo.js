const initialstate = {
    list: []
}
const ToDo = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const { id, data } = action.payload
            return {
                ...state, //to get initial state
                payload: [
                    ...state.list, {
                        id: id,
                        data: data,
                    }
                ]
            }
        // case "DELETE_ITEM": return state = state - 1
        // case "REMOVE_ITEM": return state = state - 1
        default: return state

    }
}


export default ToDo;