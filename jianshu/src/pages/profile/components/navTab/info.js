import React, {PureComponent} from "react"
import {connect} from "react-redux"
import {InfoWrapper, InfoItem, InfoTitle, InfoContent, ContentInfo, WatchedBtn} from "../../style"

import {actionCreator} from "../../store"
import Loading from "../../../../common/loading";

class ProfileInfo extends PureComponent {
    watchBtn = []

    render() {
        const {list, userName, isLoading} = this.props;
        return isLoading ? <Loading/> : (
            <InfoWrapper>
                {
                    list.map((item, index) => {
                        return (
                            <InfoItem key={item.get("_id")}>
                                <InfoTitle>
                                    <img className="sm-profile" alt="sm-profile"
                                         src="//upload.jianshu.io/users/upload_avatars/17345424/a7d438e7-f5e5-4ce2-9332-2e2b83c0446a?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"/>
                                    <span>{userName}</span>
                                    <span className="action">{item.get("action")}</span>
                                </InfoTitle>
                                <InfoContent>
                                    <ContentInfo>
                                        <img className="watched-profile" alt="watched-profile"
                                             src={item.getIn(["author", "imgUrl"])}/>
                                        <div className="info">
                                            <h5>{item.getIn(["author", "author"])}</h5>
                                            <p>{item.getIn(["author", "brief"])}</p>
                                        </div>
                                        <WatchedBtn>
                                            <a ref={a => {
                                                this.watchBtn.push(a)
                                            }}
                                               onMouseEnter={() => {
                                                   this.watchBtn[index].innerHTML = item.get("watched") === false ? "+关注" : "取消关注"
                                               }}
                                               onMouseLeave={() => {
                                                   this.watchBtn[index].innerHTML = item.get("watched") === false ? "+关注" : "已关注"
                                               }}
                                               onClick={() => {
                                                   this.handleWatch(index, item.getIn(["author", "_id"]), item.get("watched") === false)
                                               }}
                                            >已关注</a>
                                        </WatchedBtn>
                                    </ContentInfo>
                                    <p className="watched-info">{item.getIn(["author", "desc"])}</p>
                                </InfoContent>
                            </InfoItem>
                        )
                    })
                }
            </InfoWrapper>
        )
    }

    componentDidMount() {
        this.props.getInfoList()
    }

    handleWatch = (index, _id, watch) => {
        this.watchBtn[index].innerHTML = watch === false ? "+关注" : "已关注"
        this.watchBtn[index].className = watch === false ? "unWatch" : ""
        this.props.toggleWatch(_id, watch)
    }
}

const mapStateToPorps = (state) => ({
    list: state.getIn(["profile", "infoList"]),
    isLoading: state.getIn(["profile", "isLoading"]),
    userName: state.getIn(["login", "userName"]),
})
const mapDispatchToPorps = (dispatch) => ({
    getInfoList: () => {
        dispatch(actionCreator.getInfoListAction())
    },
    toggleWatch: (_id, watch) => {
        dispatch(actionCreator.toggleWatchAction(_id, watch))
    }
})
export default connect(mapStateToPorps, mapDispatchToPorps)(ProfileInfo)

