import {SEARCH_FOCUS, CHANGE_LIST, CHANGE_MOUSEIN, CHANGE_PAGE, TOGGLE_THEME,TOGGLE_SETTING,TOGGLE_FONT_SIZE} from "./actionTypes"
import {fromJS} from "immutable"

//1.immutable中的fromJS方法可以帮助我们将一个JS对象转换为一个Immutable对象
//Immutable对象的属性的获取不可以使用.语法，而是get(属性值)的方式
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 0,
    totalPage: 0,
    theme:sessionStorage.getItem("theme"),
    fontSize:"normal",
    isShowSetting:false
})

//导出一个纯函数，没有副作用，给一个固定的输入就有固定的输出
export default (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_FOCUS:
            //因为此时已经是一个immutable对象了，可以使用set方法进行修改属性的值
            //set方法会结合之前immutable对象的值和设置的值，返回一个全新的对象
            return state.set("focused",action.focused);
        case CHANGE_LIST:
            return state.set("list", action.data).set("totalPage", action.totalPage);
        case CHANGE_MOUSEIN:
            return state.set("mouseIn", action.mouseIn);
        case CHANGE_PAGE:
            const page = state.get("page") >= state.get("totalPage") - 1 ? 0 : state.get("page") + 1
            return state.set("page", page);
        case TOGGLE_THEME:
            sessionStorage.setItem("theme",action.theme)
            return state.set("theme", action.theme)
        case TOGGLE_FONT_SIZE:
            return state.set("fontSize", action.fontSize)
        case TOGGLE_SETTING:
            return state.set("isShowSetting", action.isShowSetting)
        default:
            return state;
    }
}

