import React, {PureComponent} from "react"

import Topic from "./components/Topic"
import List from "./components/List"
import Recommend from "./components/Recommend"
import Writer from "./components/Writer"
import {HomeWrapper,HomeContent, HomeLeft, HomeRight, BackTop} from "./style"

import {connect} from "react-redux"

import {actionCreator} from "./store"
import {actionCreator as loginActionCreator} from "../login/store"
import {ThemeProvider} from "styled-components"

//PureComponent是一个纯组件
/*
* 我们的大部分组件都通过connect方法和store进行关联，一旦store中的数据被修改，每个组件都会重新渲染，性能很差，我们通过shouldComponentUpdate来决定要不要重新渲染组件

解决方案：

使用PureComponent代替Component，使用PureComponent是因为我们使用了immutable.js，他们可以结合的很好，如果不使用，可能会有坑
* */
class Home extends PureComponent {
    handleScrollTop = () => {
        //回到顶部
        window.scrollTo(0, 0);
    }

    render() {
        const {theme} = this.props;
        return (
            <ThemeProvider theme={{mode: theme}}>
                <HomeWrapper>
                    <HomeContent>
                        <HomeLeft>
                            <img className="banner-img" alt="banner-img"
                                 src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                            <Topic/>
                            <List/>
                        </HomeLeft>
                        <HomeRight>
                            <Recommend/>
                            <Writer/>
                        </HomeRight>
                        {
                            this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                        }
                    </HomeContent>
                </HomeWrapper>
            </ThemeProvider>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();

    }

    //解绑window的scroll事件
    componentWillUnmount() {
        window.removeEventListener("scroll", this.props.changeScrollTopShow)
    }

    bindEvents = () => {
        window.addEventListener("scroll", this.props.changeScrollTopShow, false)
    }

}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(["home", "showScroll"]),
    theme: state.getIn(["header", "theme"]),
})

const mapDispatchToProps = (dispatch) => ({
    /*getUserInfo: () => {
        dispatch(loginActionCreator.getUserInfo())
    },*/
    changeHomeData: () => {
        dispatch(actionCreator.getHomeInfo())
    },
    changeScrollTopShow: (e) => {
        const scrollTop = document.documentElement.scrollTop
        dispatch(actionCreator.toggleTopShowAction(scrollTop > 400))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
