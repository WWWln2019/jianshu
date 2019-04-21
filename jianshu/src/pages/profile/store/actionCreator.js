import {CHANGE_INFO_LIST, CHANGE_LOADING, CHANGE_WATCH, CHANGE_ARTICLE_LIST} from "./actionTypes"
import {infoList, watch, unWatch, myArticleList} from "../../../api"
import {fromJS} from "immutable"

const changeInfoListAction = (data) => ({
    type: CHANGE_INFO_LIST,
    data: fromJS(data)
})
const changeArticleListAction = (data) => ({
    type: CHANGE_ARTICLE_LIST,
    data: fromJS(data)
})
const changeLoadingAction = (isLoading) => ({
    type: CHANGE_LOADING,
    isLoading
})
const changeWatchAction = (_id, watch) => ({
    type: CHANGE_WATCH,
    _id,
    watch
})
const getInfoListAction = () => {
    return (dispatch) => {
        dispatch(changeLoadingAction(true))
        infoList().then((res) => {
            const {status, data} = res
            if (status === 1) {
                dispatch(changeInfoListAction(data))
            }
            dispatch(changeLoadingAction(false))
        })
    }
}
const getArticleListAction = () => {
    return (dispatch) => {
        dispatch(changeLoadingAction(true))
        myArticleList().then((res) => {
            const {status, data} = res
            if (status === 1) {
                dispatch(changeArticleListAction(data))
            }
            dispatch(changeLoadingAction(false))
        })
    }
}
const toggleWatchAction = (_id, isWatch) => {
    return (dispatch) => {
        isWatch ? watch(_id).then((res) => {
            const {status} = res
            if (status === 1) {
                dispatch(changeWatchAction(_id, isWatch))
            }
        }) : unWatch(_id).then((res) => {
            const {status} = res
            if (status === 1) {
                dispatch(changeWatchAction(_id, isWatch))
            }
        })
    }
}
export {
    getInfoListAction,
    toggleWatchAction,
    getArticleListAction
}
