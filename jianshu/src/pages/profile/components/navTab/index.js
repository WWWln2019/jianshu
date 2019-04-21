import React, {PureComponent} from "react"
import {NavTabWrapper, NavTabBox, NavTabItem} from "../../style"

import {connect} from "react-redux"
import {Link, withRouter} from "react-router-dom"
import {renderRoutes} from "react-router-config"
import {actionCreator as loginActionCreator} from "../../../login/store";

class NavTab extends PureComponent {
    render() {
        const {location: {pathname}} = this.props
        return (
            <NavTabWrapper>
                <NavTabBox>
                    <NavTabItem className={pathname === "/profile/article" ? "active" : ""}>
                        <Link className="link" to={`${this.props.match.url}/article`}>
                            <h4>
                                <span className="icon-wrapper"><i className="iconfont article">&#xe602;</i></span>
                                文章
                            </h4>
                        </Link>
                    </NavTabItem>

                    <NavTabItem className={pathname === "/profile/info" ? "active" : ""}>
                        <Link className="link" to={`${this.props.match.url}/info`}>
                            <h4>
                                <i className="iconfont info">&#xe604;</i>
                                动态
                            </h4>
                        </Link>
                    </NavTabItem>
                    <NavTabItem className={pathname === "/profile/comment" ? "active" : ""}>
                        <Link className="link" to={`${this.props.match.url}/comment`}>
                            <h4>
                                <i className="iconfont comment">&#xe649;</i>
                                最新评论
                            </h4>
                        </Link>
                    </NavTabItem>
                    <NavTabItem className={pathname === "/profile/hot" ? "active" : ""}>
                        <Link className="link" to={`${this.props.match.url}/hot`}>
                            <h4>
                                <i className="iconfont hot">&#xe608;</i>
                                热门
                            </h4>
                        </Link>
                    </NavTabItem>
                </NavTabBox>
                {
                    renderRoutes(this.props.route.children)
                }
            </NavTabWrapper>
        )
    }

    componentDidMount() {
        this.props.getUserInfo()
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUserInfo: () => {
        dispatch(loginActionCreator.getUserInfo())
    },
})
export default withRouter(connect(null, mapDispatchToProps)(NavTab))

