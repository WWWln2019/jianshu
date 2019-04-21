import {
    CHANGE_HOME_LIST,
    ADD_ARTICLE_LIST,
    TOGGLE_TOP_SHOW,
    ADD_WRITER_LIST,
    CHANGE_WRITER_PAGE,
    TOGGLE_LOADING,
    TOGGLE_WATCH
} from "./actionTypes"

import {fromJS} from "immutable"

import {homeList, articleList, watch, writerList} from "../../../api"

const changeHomeListAction = (data) => ({
    type: CHANGE_HOME_LIST,
    data: fromJS(data)
})

const getHomeInfo = () => (
    (dispatch) => {
        homeList().then((res) => {
            const {status, data} = res;
            if (status === 1) {
                dispatch(changeHomeListAction(data))
            }
        })
    })

const addArticleListAction = (data, nextPage) => ({
    type: ADD_ARTICLE_LIST,
    data: fromJS(data),
    nextPage
})
const toggleIsLoading = (isLoading) => ({
    type: TOGGLE_LOADING,
    isLoading
})
const getMoreListAction = (page) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true))
        articleList(page, 10).then((res) => {
            const {status, data} = res;
            if (status === 1) {
                dispatch(addArticleListAction(data, page + 1))
            }
            dispatch(toggleIsLoading(false))
        })
    }
}
const toggleTopShowAction = (showScroll) => ({
    type: TOGGLE_TOP_SHOW,
    showScroll
})
const addWriterListAction = (data, totalPage) => ({
    type: ADD_WRITER_LIST,
    data: fromJS(data),
    totalPage
})
const toggleWatchAction = (id) => ({
    type: TOGGLE_WATCH,
    id
})

const watchAction = (id) => (
    (dispatch) => {
        watch(id).then((res) => {
            const {status} = res;
            if (status === 1) {
                dispatch(toggleWatchAction(id))
            }
        })
    }
)
const getWriterList = () => (
    (dispatch) => {
        writerList().then((res) => {
            const {status, data} = res;
            if (status === 1) {
                dispatch(addWriterListAction(data, Math.ceil(data.length / 6)))
            }
        })
    }
)
const changeWriterPageAction = () => ({
    type: CHANGE_WRITER_PAGE
})
export {
    changeHomeListAction,
    getHomeInfo,
    getMoreListAction,
    toggleTopShowAction,
    getWriterList,
    changeWriterPageAction,
    watchAction
}
