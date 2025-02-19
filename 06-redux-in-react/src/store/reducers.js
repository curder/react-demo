import { CHANGE_COUNT } from "./constans"

const initialState = {
    count: 0,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COUNT:
            return { ...state, count: state.count + action.number, }
        default:
            return state;
    }
}

export default reducer;