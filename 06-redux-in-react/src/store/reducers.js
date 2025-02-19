import { CHANGE_COUNT, CHANGE_BANNERS, CHANGE_RECOMMENDS } from "./constans"

const initialState = {
    count: 0,
    banners: [],
    recommends: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COUNT:
            return { ...state, count: state.count + action.number, }
        case CHANGE_BANNERS:
            return { ...state, banners: action.banners, }
        case CHANGE_RECOMMENDS:
            return { ...state, recommends: action.recommends, }
        default:
            return state;
    }
}

export default reducer;