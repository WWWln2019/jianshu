import {CHANGE_LOGIN, TOGGLE_LOGIN_ACTION, TOGGLE_REMEMBER_ME, INIT_STATE, TOGGLE_LOADING} from "./actionTypes"

import {fromJS} from "immutable"

const defaultState = fromJS({
    isLogin: false,
    isLoading: false,
    userName: "",
    loginAction: true,
    rememberMe: true
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return state.merge({"isLogin": action.data.isLogin, "userName": action.data.userName})
        case TOGGLE_LOGIN_ACTION:
            return state.set("loginAction", action.isLoginAction)
        case TOGGLE_REMEMBER_ME:
            return state.set("rememberMe", !state.get("rememberMe"))
        case TOGGLE_LOADING:
            return state.set("isLoading", action.isLoading)
        case INIT_STATE:
            return defaultState
        default:
            return state;
    }
}
