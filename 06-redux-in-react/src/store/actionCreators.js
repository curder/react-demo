import { CHANGE_COUNT, CHANGE_BANNERS, CHANGE_RECOMMENDS } from "./constans"

export const changeCountAction = (number) => ({
    type: CHANGE_COUNT,
    number,
})

export const changeBannersAction = (banners) => ({
    type: CHANGE_BANNERS,
    banners,
})

export const changeRecommendsAction = (recommends) => ({
    type: CHANGE_RECOMMENDS,
    recommends,
})