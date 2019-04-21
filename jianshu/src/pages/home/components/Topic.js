import React, {PureComponent} from "react"

import {connect} from "react-redux"

import {TopicWrapper, TopicItem} from "../style"
import {actionCreator} from "../store"
import Loading from "../../../common/loading";
class Topic extends PureComponent {
    render() {
        const {list} = this.props
        return list.size===0?<Loading/>:(
            <TopicWrapper>
                {
                    list.map((item,index)=>(
                        /*item为一个immutable对象，要获取其属性，必须通过get方法*/
                        <TopicItem key={item.get("_id")}>
                            <img className="topic-img" src={item.get("imgUrl")} alt=""/>
                            {item.get("title")}
                        </TopicItem>
                    ))
                }
                <a className="more" href="#">更多热门专题&gt;</a>
            </TopicWrapper>
        )
    }
    componentDidMount() {
        this.props.getList();
    }
}

const mapStateToProps = (state) => ({
    list:state.getIn(["home","topicList"])
})
const mapDispatchToProps = (dispatch) => ({
    getList:()=>{
        dispatch(actionCreator.getWriterList())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Topic)
