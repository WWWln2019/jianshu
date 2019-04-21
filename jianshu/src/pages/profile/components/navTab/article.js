import React, {PureComponent} from "react"
import Loading from "../../../../common/loading"
import {actionCreator} from "../../store";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {ListInfo, ListItem} from "../../../home/style";

class ProfileArticle extends PureComponent {
    render() {
        const {list, isLoading} = this.props
        return (
            <div>
                {
                    isLoading ? <Loading/>
                        : (list.map((item, index) => (
                                /*动态路由*/
                                <Link key={index} to={`/detail/${item.getIn(["key","_id"])}`}>
                                    <ListItem>
                                        <img className="pic" src={item.get("imgUrl")} alt=""/>
                                        <ListInfo>
                                            <h3 className="title">{item.get("title")}</h3>
                                            <p className="desc">{item.get("desc")}</p>
                                        </ListInfo>
                                    </ListItem>
                                </Link>
                            ))
                        )
                }
            </div>
        )
    }

    componentDidMount() {
        this.props.getList()
    }
}

const mapStateToPorps = (state) => ({
    list: state.getIn(["profile", "articleList"]),
    isLoading: state.getIn(["profile", "isLoading"]),
})
const mapDispatchToPorps = (dispatch) => ({
    getList: () => {
        dispatch(actionCreator.getArticleListAction())
    }
})
export default connect(mapStateToPorps, mapDispatchToPorps)(ProfileArticle)

