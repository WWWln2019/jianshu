import React from "react"
import {ThemeProvider} from "styled-components"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {NotFoundWrappwer, NotFoundContent, BackBtn} from "./style"

const NotFound = (props) => {
    const {theme} = props
    return (
        <ThemeProvider theme={{mode: theme}}>
            <NotFoundWrappwer>
                <img className="logo" alt="logo"
                     src="//cdn2.jianshu.io/assets/web/error_p_logo-4a543c8ed828256afa97a62fbea4c186.png"/>
                <NotFoundContent>
                    <img alt="404" src="//cdn2.jianshu.io/assets/web/img_404-80cb554db22104d39ab89692e9ebfdb8.png"/>
                    <h3>您要找的页面不存在</h3>
                    <p>可能是因为您的链接地址有误、该文章已经被作者删除或转为私密状态。</p>
                    <BackBtn>
                        <Link to="/">返回「简书」首页</Link>
                    </BackBtn>
                </NotFoundContent>
            </NotFoundWrappwer>
        </ThemeProvider>
    )
}
const mapStateToProps = (state) => ({
    theme: state.getIn(["header", "theme"])
})
export default connect(mapStateToProps, null)(NotFound)
