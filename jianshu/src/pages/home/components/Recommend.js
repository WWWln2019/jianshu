import React, {PureComponent} from "react"

import {RecommendWrapper, RecommendItem} from "../style"

import {connect} from "react-redux"
import Loading from "../../../common/loading";

class Recommend extends PureComponent {
    render() {
        const {list} = this.props;
        return list.size===0?<Loading/>:(
            <RecommendWrapper>
                {
                    list.map((item) => (
                        <RecommendItem key={item.get("_id")} imgUrl={item.get("imgUrl")}/>
                    ))
                }
            </RecommendWrapper>
        )
    }
}

const matStateToProps = (state) => ({
    list: state.getIn(["home", "recommendList"])
})
export default connect(matStateToProps, null)(Recommend)
