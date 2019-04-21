import React, {PureComponent} from "react"

import {WriterWrapper, WriterItem} from "../style"
import {connect} from "react-redux"
import {actionCreator} from "../store"
import Loading from "../../../common/loading";

class Writer extends PureComponent {
    watchBtn = []
    isChange = true

    render() {
        const {list, page, changeWriterList} = this.props;
        const a = () => {
            let b = true;
            setTimeout(function () {
                b = !b;
            }, 1000)
            console.log(b)
            return b;
        }
        return list.size===0?<Loading/>:(
            <WriterWrapper>
                <div className="header">
                    <span>推荐作者</span>
                    <span onClick={() => {
                        changeWriterList(this.spin)
                    }}>
                        <i className="iconfont span" ref={(i) => {
                            this.spin = i
                        }}>&#xe851;</i>
                        换一换
                    </span>
                </div>
                {
                    list.slice(page * 6, (page + 1) * 6).map((item, index) => (
                        <WriterItem key={item.get("_id")}>
                            <img className="profile" src={item.get("imgUrl")} alt="tx"/>
                            <div className="info">
                                <p className="author">{item.get("author")}</p>
                                <p className="desc">{item.get("desc")}</p>
                            </div>
                            <a className={item.get("watched")?"watch watched":"watch"} ref={a => this.watchBtn.push(a)} onClick={() => {
                                this.handleWatch(index,item.get("_id"))
                            }}>{item.get("watched")?"已":<strong>+</strong>}关注</a>
                        </WriterItem>
                    ))
                }
            </WriterWrapper>
        )
    }

    handleWatch = (index,id) => {
        //this.watchBtn[index].classList.add("watched");
        this.props.watch(id)
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(["home", "writerList"]),
    page: state.getIn(["home", "writerPage"]),
})
const mapDispatchToProps = (dispatch) => ({
    changeWriterList: (spin) => {
        const originAngle = spin.style.transform.replace(/[^0-9]/g, "") || 0;
        spin.style.transform = `rotate(${parseInt(originAngle) + 360}deg)`
        dispatch(actionCreator.changeWriterPageAction())
    },
    watch:(id)=>{
        dispatch(actionCreator.watchAction(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Writer)
