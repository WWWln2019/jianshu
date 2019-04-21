import axios from "axios"
import "./request"

const headerSearchList = () => axios.get("/headerSearchList")
const articleDetail = (id) => axios.get(`/articleDetail?_id=${id}`)
const homeList = () => axios.get("/homeList")
const writerList = () => axios.get("/writerList")
const articleEdit = (data) => axios.post(`/articleEdit`,data)
const articleList = (page, pageSize) => axios.get(`/articleList?page=${page}&pageSize=${pageSize}`)
const myArticleList = (page, pageSize) => axios.get(`/myArticleList`)
const userInfo = () => axios.get("/userInfo")
const login = ({userName, userPwd}) => axios.post(`/login`, {userName, userPwd})
const register = ({userName, userPwd}) => axios.post(`/register`, {userName, userPwd})
const logout = () => axios.post(`/logout`)
const infoList = () => axios.get(`/infoList`)
const watch = (_id) => axios.post("/watch", {author: _id})
const unWatch = (_id) => axios.post("/unWatch", {_id})
export {
    headerSearchList,
    articleDetail,
    articleEdit,
    homeList,
    articleList,
    myArticleList,
    userInfo,
    login,
    register,
    logout,
    infoList,
    watch,
    unWatch,
    writerList
}
