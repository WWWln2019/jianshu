import React, {PureComponent} from 'react';

import Header from "./common/header/index"
import {Globalstyle} from "./style";
import {GlobalIconFontStyle} from "./statics/iconfont/iconfont-style";
import {connect} from "react-redux"
//react中使用路由
import {BrowserRouter, Switch} from "react-router-dom"
import {renderRoutes} from "react-router-config"
import {routes} from "./route"
import {actionCreator as loginActionCreator} from "./pages/login/store";
import {actionCreator} from "./pages/home/store";

//import Home from "./pages/home"
//这是一个异步组件，此时直接与Router组件对应的是这个异步组件，而非原始组件，所以原始组件获取不到router中的信息了
//import Detail from "./pages/detail/loadable"

class App extends PureComponent {

    render() {
        return (
            <div>
                <Globalstyle/>
                <GlobalIconFontStyle/>
                {/*现在的浏览器允许JavaScript操控URL而不产生Http请求，所以，我们不必依赖于URL中的哈希部分来进行路由的切换*/}

                <BrowserRouter>
                    {/*当请求路径为/时，不显示detail，当请求路径为/detail时，都显示，
                        要想让每个组件单独显示，则添加eaxct属性，或者使用<Switch></Switch>包裹，代表路径完全匹配的时候才会显示*/}

                    <Header/>
                    <Switch>
                        {
                            renderRoutes(routes)
                        }
                        {/*<Route path="/" exact render={() => (<Home/>)}/>
                        访问这个路径时，传递一个参数名为id的参数值
                        <Route path="/detail/:id" exact component={Detail}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/write" exact component={Write}></Route>
                        <Route path="/profile" exact component={Profile}>
                        </Route>
                        <Route exact path={`/profile/article`} component={ProfileArticle}/>
                        <Route path={`/profile/info`} component={ProfileInfo}/>
                        <Route path={`/profile/comment`} component={ProfileComment}/>
                        <Route path={`/profile/hot`} component={ProfileHot}/>
                        <Route component={NotFound}/>*/}
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }

    componentDidMount() {
        this.props.getUserInfo();
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUserInfo: () => {
        dispatch(loginActionCreator.getUserInfo())
    }
})
export default connect(null, mapDispatchToProps)(App);
