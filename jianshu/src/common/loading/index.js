import React from "react"
import {LoadingWrapper, LoadingInfo} from "./style"

const Loading = () => {
    return (
        <LoadingWrapper>
            <img className="pic" alt=""/>
            <LoadingInfo>
                <h3 className="title"></h3>
                <p className="desc"></p>
                <p className="desc"></p>
            </LoadingInfo>
        </LoadingWrapper>)
}

const mapStateToProps = (state) => ({
    isLoading: state.getIn(["home", "isLoading"])
})
export default Loading
