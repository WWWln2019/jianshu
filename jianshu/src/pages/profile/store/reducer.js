import {fromJS} from "immutable"

import {CHANGE_INFO_LIST, CHANGE_LOADING, CHANGE_WATCH, CHANGE_ARTICLE_LIST} from "./actionTypes"

const defaultDtate = fromJS({
    infoList: [],
    articleList: [],
    isLoading: false
})
export default (state = defaultDtate, action) => {

    switch (action.type) {
        case CHANGE_INFO_LIST:
            return state.set("infoList", action.data);
        case CHANGE_ARTICLE_LIST:
            return state.set("articleList", action.data);
        case CHANGE_LOADING:
            return state.set("isLoading", action.isLoading);
        case CHANGE_WATCH:
            const index = state.get("infoList").findIndex((item) => {
                if (item.get("_id") === action._id) {
                    return true
                }
                return false
            })
            const infoList = state.get("infoList").update(index, item => item.set("watched", action.watch))
            return state.set("infoList", infoList);

        default:
            return state;
    }
}
