//import {combineReducers} from "redux"
//使用redux-immutable的combineReducers生成的reducer就是一个immutable对象
import {combineReducers} from "redux-immutable"

import {reducer as headerReducer} from "../common/header/store"
import {reducer as homeReducer} from "../pages/home/store"
import {reducer as detailReducer} from "../pages/detail/store"
import {reducer as loginReducer} from "../pages/login/store"
import {reducer as writeReducer} from "../pages/write/store"
import {reducer as profileReducer} from "../pages/profile/store"

//使用redux-immutable的combineReducers生成的reducer就是一个immutable对象
export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer,
    write: writeReducer,
    profile: profileReducer
})
