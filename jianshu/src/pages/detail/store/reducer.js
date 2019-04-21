import {CHANGE_DETAIL, INIT_STATE} from "./actionTypes"

import {fromJS} from "immutable"

const defaultState = fromJS({
    title: "",
    content: ``
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_DETAIL:
            return state.merge({
                title: action.data.title,
                content: action.data.content
            });
        case INIT_STATE:
            return defaultState
        default:
            return state;
    }
}
