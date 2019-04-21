import React, {PureComponent} from "react"

import {LoginWrapper, LoginContent, LoginTab, LoginTabTitle, LoginTabItem, Form, Input, Button} from "./style"

import {connect} from "react-redux"

import {actionCreator} from "./store"

import {Redirect} from "react-router-dom"

import {createBrowserHistory} from 'history';

import loading from "../../statics/loading.gif"

import {ThemeProvider} from "styled-components"

//PureComponent是一个纯组件
/*
* 我们的大部分组件都通过connect方法和store进行关联，一旦store中的数据被修改，每个组件都会重新渲染，性能很差，我们通过shouldComponentUpdate来决定要不要重新渲染组件

解决方案：

使用PureComponent代替Component，使用PureComponent是因为我们使用了immutable.js，他们可以结合的很好，如果不使用，可能会有坑
* */
class Login extends PureComponent {
    render() {
        let {isLogin, isLoading, loginAction, rememberMe, theme, toggleLogin, toggleRememberMe} = this.props;
        const {search} = this.props.location
        if (search.indexOf("loginAction") > -1) {
            toggleLogin(false)
            const history = createBrowserHistory()
            history.replace("/login")
            this.props.location.search = ""
        }
        return isLogin ? (<Redirect to="/"/>) : (
            <ThemeProvider theme={{mode: theme}}>
                <LoginWrapper className="login-wrapper">
                    <LoginContent>
                        <LoginTab>
                            <LoginTabTitle className={loginAction ? "active" : ""} onClick={() => {
                                this.doInit(true)
                            }}>登录</LoginTabTitle>
                            <LoginTabTitle className={loginAction ? "left-border" : "active left-border"}
                                           onClick={() => {
                                               this.doInit(false)
                                           }}>注册</LoginTabTitle>
                        </LoginTab>
                        <LoginTabItem>
                            <Form>
                                <div className="checkMsg" ref={(p) => {
                                    this.checkMsg = p
                                }}></div>
                                {/*由于是一个styled-components，所以我们不能使用传统的ref的方式拿到element了，可以使用styled-components给定的innerRef来实现*/}
                                <Input className="user-name" type="text" placeholder="手机号或邮箱" ref={(input) => {
                                    this.userName = input
                                }}/>
                                <Input className="user-pwd" type="password" placeholder="密码" ref={(input) => {
                                    this.userPwd = input
                                }}/>
                                <p>
                                    <input type="checkbox" defaultChecked={rememberMe} onChange={toggleRememberMe}/>记住我
                                    <a>登录遇到问题？</a>
                                </p>
                                <Button onClick={this.doSubmit} disabled={isLoading}>
                                    {
                                        isLoading ? <img alt="loading" ref={(img) => {
                                            this.loading = img
                                        }} src={loading}/> : null
                                    }
                                    {loginAction ? "登录" : "注册"}
                                </Button>
                            </Form>
                        </LoginTabItem>
                        <LoginTabItem className="more-sign">
                            <span className="bg"></span>
                            <p>社交账号登录</p>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#iconweibo"></use>
                            </svg>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#iconsocial-wechat"></use>
                            </svg>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#iconqq"></use>
                            </svg>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#iconqita"></use>
                            </svg>
                        </LoginTabItem>
                    </LoginContent>
                </LoginWrapper>
            </ThemeProvider>
        )
    }

    componentWillUnmount() {
        //this.props.initState();
    }

    doInit = (isLoginAction) => {
        this.checkMsg.innerText = ""
        this.props.toggleLogin(isLoginAction)
    }
    doSubmit = (e) => {
        e.preventDefault();
        const userName = this.userName.value
        const userPwd = this.userPwd.value
        if (!/^([1-9][0-9]{10})|([a-zA-Z0-9][a-zA-Z0-9-_.]*@[a-zA-Z0-9]+[a-zA-Z0-9.-_]+)$/.test(userName)) {
            this.checkMsg.innerText = "输入正确的手机号和邮箱"
            this.userName.classList.add("error")
            this.userName.focus()
            return;
        }
        if (userPwd.trim() === "") {
            this.checkMsg.innerText = "密码不能为空"
            this.userPwd.classList.add("error")
            this.userPwd.focus()
            return;
        }
        this.checkMsg.innerText = ""
        //this.loading.style.display = "block"
        const {loginAction,handleLogin,handleRegister}=this.props
        loginAction?handleLogin(this.userName, this.userPwd):handleRegister(this.userName, this.userPwd)
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.getIn(["login", "isLogin"]),
    isLoading: state.getIn(["login", "isLoading"]),
    loginAction: state.getIn(["login", "loginAction"]),
    rememberMe: state.getIn(["login", "rememberMe"]),
    theme: state.getIn(["header", "theme"]),
})

const mapDispatchToProps = (dispatch) => ({
    handleLogin: (userNameEle, userPwdEle) => {
        //由于组件是通过styled-components创建的，所以通过传统的ref的方式拿不到值了，可以使用styled-components给定的innerRef拿到element
        dispatch(actionCreator.loginAction(userNameEle.value, userPwdEle.value))
    },
    handleRegister: (userNameEle, userPwdEle) => {
        //由于组件是通过styled-components创建的，所以通过传统的ref的方式拿不到值了，可以使用styled-components给定的innerRef拿到element
        dispatch(actionCreator.registerAction(userNameEle.value, userPwdEle.value))
    },
    toggleLogin: (isLoginAction) => {
        dispatch(actionCreator.toggleLoginAction(isLoginAction))
    },
    toggleRememberMe: () => {
        dispatch(actionCreator.toggleRememberMeAction())
    },
    initState: () => {
        dispatch(actionCreator.initStateAction())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
