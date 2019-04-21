import React from "react"

//创建一个异步组件
import loadable from "react-loadable"

const LoadableComponent = loadable({
        loader: () => import("./"),
        loading: () => (<div>正在加载...</div>)
    })

/*const routes = [
    {path: "profile/article",component:ProfileArticle},
    {path: "profile/info",component:ProfileInfo},
    {path: "profile/comment",component:ProfileComment},
    {path: "profile/hot",component:ProfileHot},
]*/
export default (props) => <LoadableComponent {...props}/>
