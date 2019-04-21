import {fromJS} from "immutable"

import {
    CHANGE_HOME_LIST,
    ADD_ARTICLE_LIST,
    TOGGLE_TOP_SHOW,
    ADD_WRITER_LIST,
    CHANGE_WRITER_PAGE,
    TOGGLE_LOADING,
    TOGGLE_WATCH
} from "./actionTypes"

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    writerList: [],
    recommendList: [],
    articlePage: 1,
    writerPage: 0,
    writerTotalPage: 0,
    showScroll: false,
    isLoading: false,
})
export default (state = defaultState, action) => {
    const changeHomeList = () => (
        state.merge({
            topicList: action.data.get("topicList"),
            articleList: action.data.get("articleList"),
            recommendList: action.data.get("recommendList"),
        })
    )
    const addArticleList = () => (
        state.merge({
            articleList: state.get("articleList").concat(action.data),
            articlePage: action.page,
        })
    )
    const addWriterList = () => (
        state.merge({
            writerList: action.data,
            writerTotalPage: action.totalPage,
        })
    )
    const changeWriterPage = () => (
        state.set("writerPage", state.get("writerPage") >= state.get("writerTotalPage") - 1 ? 0 : state.get("writerPage") + 1)
    )

    const changeWriterList = () => {
        const index = state.get("writerList").findIndex((item, index) => {
            if (item.get("_id") === action.id) {
                return true
            }
            return false
        })
        const writerList = state.get("writerList").update(index, (item) => item.set("watched", true))
        return state.set("writerList", writerList);
    }
    switch (action.type) {
        case CHANGE_HOME_LIST:
            return changeHomeList();
        case ADD_ARTICLE_LIST:
            return addArticleList();
        case ADD_WRITER_LIST:
            return addWriterList();
        case CHANGE_WRITER_PAGE:
            return changeWriterPage();
        case TOGGLE_TOP_SHOW:
            return state.set("showScroll", action.showScroll);
        case TOGGLE_LOADING:
            return state.set("isLoading", action.isLoading);
        case TOGGLE_WATCH:
            return changeWriterList();
        default:
            return state;
    }
}
