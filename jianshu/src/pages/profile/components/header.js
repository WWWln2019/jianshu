import React from "react"
import {connect} from "react-redux"
import {ProfileHeaderWrapper,ProfileHeaderInfo} from "../style"

const ProfileHeader = (props)=>{
    const {userName}=props
    return(
        <ProfileHeaderWrapper>
            <img className="profile" src="//upload.jianshu.io/users/upload_avatars/17345424/a7d438e7-f5e5-4ce2-9332-2e2b83c0446a?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"/>
            <ProfileHeaderInfo>
                <p className="title">{userName}</p>
                <ul className="menu-list">
                    <li>
                        <a>
                            <span>0</span>
                            <span>关注></span>
                        </a>
                    </li><li>
                        <a>
                            <span>0</span>
                            <span>粉丝></span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>0</span>
                            <span>文章></span>
                        </a>
                    </li>
                </ul>
            </ProfileHeaderInfo>
        </ProfileHeaderWrapper>
    )
}
const mapStateToProps=(state)=>({
    userName:state.getIn(["login","userName"])
})
export default connect(mapStateToProps,null)(ProfileHeader)
