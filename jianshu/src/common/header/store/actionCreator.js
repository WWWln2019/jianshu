import {
    SEARCH_FOCUS,
    CHANGE_LIST,
    CHANGE_MOUSEIN,
    CHANGE_PAGE,
    TOGGLE_THEME,
    TOGGLE_SETTING,
    TOGGLE_FONT_SIZE
} from "./actionTypes"

import {headerSearchList} from "../../../api"

import {fromJS} from "immutable"

const getSearchFocusAction = (focused) => ({
    type: SEARCH_FOCUS,
    focused
})

const getListAction = () => {
    return (dispatch) => {
        //create-react-app底层也是一个node服务器，当我们去访问/api/headerList.json时，会到工程目录下看有没有对应的路由，
        // 如果没有还会去public目录下查找，有则输出
        headerSearchList().then((res) => {
            const {status, data} = res
            if (status === 1) {
                dispatch(changeListAction(data))
            }
        })
    }
}

const changeMouseInAction = (mouseIn) => ({
    type: CHANGE_MOUSEIN,
    mouseIn
})

const changePageAction = () => ({
    type: CHANGE_PAGE
})
const toggleThemeAction = (theme) => ({
    type: TOGGLE_THEME,
    theme
})
const toggleSettingAction = (isShowSetting) => ({
    type: TOGGLE_SETTING,
    isShowSetting
})
const toggleFontSizeyAction = (fontSize) => ({
    type: TOGGLE_FONT_SIZE,
    fontSize
})
const changeListAction = (data) => ({
    type: CHANGE_LIST,
    /*因为immutable对象中的所有对象也为immutable，所以需要转换一下*/
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
export {
    getSearchFocusAction,
    getListAction,
    changeMouseInAction,
    changePageAction,
    toggleThemeAction,
    toggleSettingAction,
    toggleFontSizeyAction
}
