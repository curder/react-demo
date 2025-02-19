import { CHANGE_COUNT } from "./constans"

export const changeCountAction = (number) => ({
    type: CHANGE_COUNT,
    number,
})