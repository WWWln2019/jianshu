import React, {PureComponent} from "react"
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    Setting,
    SettingItem
} from "./style"

import {CSSTransition} from "react-transition-group"
import {ThemeProvider} from "styled-components"

import {connect} from "react-redux"
import {Link, withRouter} from "react-router-dom"
//从react-router中拿到browserHistory进行函数式编程
import {createBrowserHistory} from 'history';

import {actionCreator} from "./store"
import {actionCreator as loginActionCreator} from "../../pages/login/store"

/*const bgColor = theme("mode", {
    light: "#fff",
    dark: "#3f3f3f"
})*/
/*const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
    background:${theme_bg_color}
`*/

//无状态组件
class Header extends PureComponent {
    handleSearchInfo = (item) => {
        if (this.search) {
            this.search.value = item.get("title")
        }
    }
    getListArea = () => {
        const {focused, mouseIn, list, page, handleMouseAction, handleChangePage} = this.props
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseLeave={() => {
                    handleMouseAction(false)
                }} onMouseEnter={() => {
                    handleMouseAction(true)
                }}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {
                            handleChangePage(this.spin)
                        }}>
                            <i ref={(i) => {
                                this.spin = i
                            }} className="iconfont span">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    {
                        //this.props.list是一个immutable对象，也支持map方法
                        list.slice(page * 10, (page + 1) * 10).map((item, index) => (
                            <SearchInfoItem key={item.get("_id")}
                                            onClick={()=>{this.handleSearchInfo(item)}}>{item.get("title")}</SearchInfoItem>
                        ))
                    }
                </SearchInfo>
            );
        }
        return null;
    }
    getSettingsArea = () => {
        const {isShowSetting, toggleSetting} = this.props
        if (isShowSetting) {
            return (
                <Setting onMouseLeave={() => {
                    toggleSetting(false)
                }}>
                    <SettingItem className="day-night-group">
                        <svg className="icon moon" aria-hidden="true">
                            <use xlinkHref="#iconyueliang"></use>
                        </svg>
                        夜间模式
                        <div className="switch">
                            <a ref={btn => {
                                this.lightBtn = btn
                            }}
                               onClick={() => {
                                   this.handleThemeColor("dark")
                               }}>开</a>
                            <a ref={btn => {
                                this.darkBtn = btn
                            }}
                               onClick={() => {
                                   this.handleThemeColor("light")
                               }} className="active">关</a>
                        </div>
                    </SettingItem>
                    <SettingItem className="setting-btn">
                        <a onClick={() => {
                            this.handleFontSize("big")
                        }}
                           ref={btn => {
                               this.bigSizeBtn = btn
                           }}
                        >大</a>
                        <a onClick={() => {
                            this.handleFontSize("normal")
                        }}
                           ref={btn => {
                               this.normalSizeBtn = btn
                           }}
                           className="active">正常</a>
                    </SettingItem>
                    <SettingItem className="setting-btn">
                        <a className="active">简</a>
                        <a>繁</a>
                    </SettingItem>
                </Setting>
            )
        } else {
            return null
        }
    }

    render() {
        const {focused, toggleInput, list, isLogin, logout, theme, font_size, toggleSetting} = this.props;
        return (
            /*HeaderWrapper为一个带有样式的div标签组件*/
            <ThemeProvider theme={{mode: theme, fontSize: font_size}}>
                <HeaderWrapper>
                    <Link to="/">
                        <Logo/>
                    </Link>
                    <Nav>
                        <Link to="/"><NavItem className="left active">首页</NavItem></Link>
                        <NavItem className="left">下载App</NavItem>
                        {
                            isLogin &&
                            (<NavItem className="right profile">
                                <Link to="/profile">
                                    <img
                                        src="//upload.jianshu.io/users/upload_avatars/17345424/a7d438e7-f5e5-4ce2-9332-2e2b83c0446a?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"/>
                                </Link>
                            </NavItem>)
                        }
                        {
                            isLogin ? <NavItem className="right" onClick={logout}>退出</NavItem> :
                                <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                        }
                        <NavItem className="right" onClick={() => {
                            toggleSetting(true)
                        }}>
                            <i className="iconfont">&#xe636;</i>
                            {
                                this.getSettingsArea()
                            }
                        </NavItem>
                        <SearchWrapper>
                            {/*给输入框加入动画效果*/}
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch
                                    ref={search => {
                                        this.search = search
                                    }}
                                    onFocus={() => {
                                        toggleInput(true, list.size > 0 ? false : true)
                                    }}
                                    onBlur={() => {
                                        toggleInput(false)
                                    }}
                                    className={focused ? "focused" : ""}/>
                            </CSSTransition>
                            <i className={focused ? "iconfont focused zoom" : "iconfont zoom"}>&#xe69d;</i>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to="/write">
                            <Button className="writing">
                                <i className="iconfont">&#xe624;</i>&nbsp;
                                写文章
                            </Button>
                        </Link>
                        <Link to="/login?loginAction=true"><Button className="reg"
                                                                   onClick={this.handleReg}>注册</Button></Link>
                    </Addition>
                </HeaderWrapper>
            </ThemeProvider>
        );
    }

    handleThemeColor = (theme) => {
        switch (theme) {
            case "light":
                this.lightBtn.classList.add("active");
                this.darkBtn.classList.remove("active");
                break;
            case "dark":
                this.lightBtn.classList.remove("active");
                this.darkBtn.classList.add("active");
        }
        this.props.toggleTheme(theme)
    }
    handleFontSize = (fontSize) => {
        switch (fontSize) {
            case "big":
                this.bigSizeBtn.classList.add("active");
                this.normalSizeBtn.classList.remove("active");
                break;
            case "normal":
                this.bigSizeBtn.classList.remove("active");
                this.normalSizeBtn.classList.add("active");
        }
        this.props.toggleFontSize(fontSize)
    }
    handleReg = () => {
        const history = createBrowserHistory();
        history.replace({pathname: "/login?loginAction=true"})
    }
}

const mapStatetoProps = (state) => ({
    //focused: state.header.focused
    //使用了immutable的fromJS方法将state对象转为immutable对象后，就可以使用get(属性名)获取属性值
    //focused: state.header.get("focused")
    //使用了redux-immutable中的combineReducers生成的reducer就是一个immutable对象，可以使用了
    //focused: state.get("header").get("focused")
    focused: state.getIn(["header", "focused"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    theme: state.getIn(["header", "theme"]),
    isShowSetting: state.getIn(["header", "isShowSetting"]),
    isLogin: state.getIn(["login", "isLogin"]),
    font_size: state.getIn(["login", "font_size"]),
})
const mapDispatchToProps = (dispatch) => ({
    toggleInput: (focused, hasList) => {
        hasList && dispatch(actionCreator.getListAction())
        dispatch(actionCreator.getSearchFocusAction(focused))
    },
    handleMouseAction: (isIn) => {
        dispatch(actionCreator.changeMouseInAction(isIn))
    },
    handleChangePage: (spin) => {
        const originAngle = spin.style.transform.replace(/[^0-9]/g, "") || 0;
        spin.style.transform = `rotate(${parseInt(originAngle) + 360}deg)`
        dispatch(actionCreator.changePageAction())
    },
    logout: () => {
        dispatch(loginActionCreator.logoutAction())
    },
    toggleTheme: (theme) => {
        dispatch(actionCreator.toggleThemeAction(theme))
    },
    toggleFontSize: (fontSize) => {
        dispatch(actionCreator.toggleFontSizeyAction(fontSize))
    },
    toggleSetting: (isShowSetting) => {
        dispatch(actionCreator.toggleSettingAction(isShowSetting))
    }
})
export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Header))
