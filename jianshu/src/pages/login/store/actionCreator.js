import {CHANGE_LOGIN, TOGGLE_LOGIN_ACTION, TOGGLE_REMEMBER_ME, INIT_STATE, TOGGLE_LOADING} from "./actionTypes"
import {userInfo, login, logout, register} from "../../../api"

const changeLoginAction = (data) => ({
    type: CHANGE_LOGIN,
    data
})
const getUserInfo = () => (
    (dispatch) => {
        userInfo().then((res) => {
            const {status, data} = res;
            if (status === 1) {
                dispatch(changeLoginAction({isLogin: true, ...data}))
            }
        })
    })
const loginAction = (userName, userPwd) => (
    (dispatch) => {
        dispatch(toggleLoadingAction(true))
        //axios.post("/api/login.json",{userName,userPwd}).then((res) => {
        login({userName, userPwd}).then((res) => {
            const {status} = res;
            if (status === 1) {
                dispatch(changeLoginAction({isLogin: true, userName}))
            }
            dispatch(toggleLoadingAction(false))
        })
    })
const registerAction = (userName, userPwd) => (
    (dispatch) => {
        dispatch(toggleLoadingAction(true))
        //axios.post("/api/login.json",{userName,userPwd}).then((res) => {
        register({userName, userPwd}).then((res) => {
            const {status} = res;
            if (status === 1) {
                dispatch(changeLoginAction({isLogin: true, userName}))
            }
            dispatch(toggleLoadingAction(false))
        })
    })

const logoutAction = (userName, userPwd) => (
    (dispatch) => {
        //axios.post("/api/login.json",{userName,userPwd}).then((res) => {
        logout().then((res) => {
            const {status} = res;
            if (status === 1) {
                dispatch(changeLoginAction({isLogin: false, userName: ""}))
            }
        })
    })
const toggleLoginAction = (isLoginAction) => ({
    type: TOGGLE_LOGIN_ACTION,
    isLoginAction
})
const toggleLoadingAction = (isLoading) => ({
    type: TOGGLE_LOADING,
    isLoading
})
const toggleRememberMeAction = () => ({
    type: TOGGLE_REMEMBER_ME
})
const initStateAction = () => ({
    type: INIT_STATE
})
export {
    loginAction,
    registerAction,
    changeLoginAction,
    toggleLoginAction,
    toggleRememberMeAction,
    initStateAction,
    logoutAction,
    getUserInfo,
    toggleLoadingAction
}
