const initialstate = {
    list: []
}
const ToDo = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const { id, data } = action.payload
            if (data.length > 2) {
                return {
                    ...state, //to get initial state
                    list: [
                        ...state.list, {
                            id: id,
                            data: data,
                        }
                    ]
                }
            }
        case "DELETE_ITEM":
            const newList = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newList
            }
        case "REMOVE_ITEM":
            return {
                list: []
            }

        default: return state

    }
}


export default ToDo;