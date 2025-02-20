import { CHANGE_BANNERS, CHANGE_RECOMMENDS } from "./constans"

const initialState = {
    banners: [],
    recommends: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_BANNERS:
            return { ...state, banners: action.banners, }
        case CHANGE_RECOMMENDS:
            return { ...state, recommends: action.recommends, }
        default:
            return state;
    }
}

export default reducer