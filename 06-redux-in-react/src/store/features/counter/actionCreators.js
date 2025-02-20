import * as actionTypes from "./constans"

export const changeCountAction = (number) => ({
    type: actionTypes.CHANGE_COUNT,
    number,
})
