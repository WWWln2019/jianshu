# 简书

react只能兼容到IE8

## 简书前端项目启动

## 1.下载源码后，运行命令：npm install安装依赖包

## 2.npm run start运行项目

## 项目目录搭建

### syled-components与Reset.css的结合使用

css文件一旦在一个文件中引用，则全局生效，可能会发生样式的重叠，我们需要使每个组件的样式都是独立的，不互相影响，建议使用styled-Components对样式进行管理

## 使用style-components完成Header组件布局

### 使用iconfont嵌入头部图标

### 搜索框动画效果实现

react-transition-group

！！！！transform:rotate对行内元素不起作用

## 使用react-redux进行应用数据的管理

## 使用combineReducers完成对数据的拆分管理

调试工具的使用

## actionCreators与actionTypes的拆分

## 使用Immutable.js来管理store中的数据

这个immutable.js可以帮助我们创建一个immutable对象，这个对象是不可改变的，假设state是immutable对象，那么这个state也不会被改变，这正是我们使用redux所期望的

## 使用redux-immutable统一数据格式

## 使用redux-thunk进行异步操作

## React中使用路由react-router-dom

## 首页组件的拆分

## 首页专题区域布局及reducer的设计

## 返回顶部功能实现

## 首页性能优化及路由跳转

我们的大部分组件都通过connect方法和store进行关联，一旦store中的数据被修改，每个组件都会重新渲染，性能很差，我们通过shouldComponentUpdate来决定要不要重新渲染组件

解决方案：

使用PureComponent代替Component，使用PureComponent是因为我们使用了immutable.js，他们可以结合的很好，如果不使用，可能会有坑

### 路由跳转不能使用a标签

因为我们的单页面应用是不管页面之间怎么跳转，都只会加载一次html文件，如果用a标签，会加载多次html文件，所以不符合单页面应用，比较耗性能

解决方案：

使用<Link>代替<a/>

## 动态路由/:id获取参数

在

<BrowserRouter>

​	<Router to="/detail/:id" exact component={Detail}></Router>

</BrowserRouter>

父组件：

<List>

<Link to="/detail/100"></Link>

</List>

对应的子组件Detail中:

通过this.props.match.params.id获取到这个路由路径中的参数id的值100

## 通过路径参数的方式获取参数

在

<BrowserRouter>

​	<Router to="/detail" exact component={Detail}></Router>

</BrowserRouter>

在父组件List中：

<List>

<Link to="/detail?id=100"></Link>

</List>

对应的子组件Detail中:

通过this.props.location.search.id获取到这个路由路径中的参数?id=100

## react下使用iconfont的symbol彩色图标

有坑

## 异步组件及withRouter路由方法的使用

打开Network，跳转页面时，我们发现，只有第一次加载了bundle.js文件，说明我们项目下的全部组件都存放了bundle.js下，这样当我只想加载首页就连其他组件也加载进来了，这样不好

异步组件就诞生了！！！

react-loadable

# 代码上线流程

# React版本升级说明

shouldComponentUpdate、componentWillReciveProps被废弃掉

