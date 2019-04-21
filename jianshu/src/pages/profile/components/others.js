import React from "react"
import {OtherWrapper, OtherItem} from "../style"

const ProfileOthers = (props) => {
    return (
        <OtherWrapper>
            <OtherItem>
                <ul className="watch">
                    <li>
                        <a>
                            <i className="iconfont">&#xe738;</i>
                            我关注的专题/文集/连载
                        </a>
                    </li>
                    <li>
                        <a>
                            <i className="iconfont">&#xe603;</i>
                            我喜欢的文章
                        </a>
                    </li>
                </ul>
            </OtherItem>
            <OtherItem className="topic">
                <h4>我创建的专题</h4>
                <a>+创建一个新专题</a>
            </OtherItem>
        </OtherWrapper>
    )
}
export default ProfileOthers
