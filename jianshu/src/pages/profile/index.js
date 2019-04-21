import React, {PureComponent} from "react"

import {connect} from "react-redux"
import {Redirect} from "react-router"

import {ThemeProvider} from "styled-components"

import {ProfileWrapper, ProfileContent, ProfileMain} from "./style"
import ProfileHeader from "./components/header"
import ProfileOthers from "./components/others"
import ProfileNavTab from "./components/navTab"

class Profile extends PureComponent {
    render() {
        const {isLogin,theme,location:{pathname}} = this.props
        if(pathname==="/profile"){
            return (
                <Redirect to="/profile/info"/>
            )
        }

        return isLogin?(
            <ThemeProvider theme={{mode: theme}}>
                <ProfileWrapper>
                    <ProfileContent>
                        <ProfileMain>
                            <ProfileHeader/>
                            <ProfileNavTab {...this.props}/>
                        </ProfileMain>
                        <ProfileOthers/>
                    </ProfileContent>
                </ProfileWrapper>
            </ThemeProvider>
        ):(<Redirect to="/login"/>)
    }
}

const mapStateToProps = (state) => ({
    theme: state.getIn(["header", "theme"]),
    isLogin: state.getIn(["login", "isLogin"]),
})
export default connect(mapStateToProps, null)(Profile)
