import axios from "axios"
import * as actionTypes from "./constans"

export const changeBannersAction = (banners) => ({
    type: actionTypes.CHANGE_BANNERS,
    banners,
})

export const changeRecommendsAction = (recommends) => ({
    type: actionTypes.CHANGE_RECOMMENDS,
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