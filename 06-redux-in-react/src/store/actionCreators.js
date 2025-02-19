import axios from "axios"
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

// 异步 action
export const fetchHomeMultiDataAction = () => {
    return (dispatch, getState) => {
        const url = `http://123.207.32.32:8000/home/multidata`
        axios.get(url)
            .then(
                ({ data }) => ({ banner: data.data.banner.list, recommend: data.data.recommend.list })
            ).then(
                ({ banner, recommend }) => {
                    dispatch(changeBannersAction(banner))
                    dispatch(changeRecommendsAction(recommend))
                })
    }
}