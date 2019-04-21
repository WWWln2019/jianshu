import React, {PureComponent} from "react"

import {ListItem, ListInfo, LoadMore} from "../style"
import Loading from "../../../common/loading"

import {connect} from "react-redux"
import {Link} from "react-router-dom"

import {actionCreator} from "../store"

class List extends PureComponent {
    render() {
        const {list,isLoading, getMoreList, page} = this.props;
        return list.size===0?<Loading/>:(
            <div>
                {
                    list.map((item, index) => (
                        /*动态路由*/
                        <Link key={index} to={`/detail/${item.get("key")}`}>
                            <ListItem>
                                <img className="pic" src={item.get("imgUrl")} alt=""/>
                                <ListInfo>
                                    <h3 className="title">{item.get("title")}</h3>
                                    <p className="desc">{item.get("desc")}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                {
                    isLoading?<Loading/>:null
                }
                <LoadMore onClick={() => {
                    getMoreList(page)
                }}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "articlePage"]),
    isLoading: state.getIn(["home", "isLoading"]),
})
const mapDispatchToPorps = (dispatch) => ({
    getMoreList: (page) => {
        dispatch(actionCreator.getMoreListAction(page))
    }
})

export default connect(mapStateToProps, mapDispatchToPorps)(List)
