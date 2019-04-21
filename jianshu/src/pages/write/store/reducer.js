import {CHANGE_ARTICLE, CHANGE_SAVE_STATE} from "./actionTypes"

import {fromJS} from "immutable"

const saveStateMap =
    ["发布文章","正在发布","发布成功","发布失败"]
const defaultState = fromJS({
    content: "",
    //0:正在发布,1:发布成功,-1:发布失败，2：没发布
    saveState:saveStateMap[0]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_ARTICLE:
            return state.set("content", action.data);
        case CHANGE_SAVE_STATE:
            console.log(action.state)
            return state.set("saveState", saveStateMap[action.state]);
        default:
            return state;
    }
}
