import React from "react"

//创建一个异步组件
import loadable from "react-loadable"

const LoadableComponent = loadable({
    loader:()=>import("./"),
    loading:()=>(<div>正在加载...</div>)
})

export default ()=><LoadableComponent/>
