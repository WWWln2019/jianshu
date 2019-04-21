import React, {PureComponent} from "react"
import {withRouter} from "react-router-dom"

import {DetailWrapper, DetailContent, Header, Content} from "./style"

import {connect} from "react-redux"

import {actionCreator} from "./store"
import {ThemeProvider} from "styled-components"
import Loading from "../../common/loading";

class Detail extends PureComponent {
    render() {
        const {title, content, theme} = this.props;
        return (
            <ThemeProvider theme={{mode: theme}}>
                <DetailWrapper>
                    <DetailContent>
                        {!title && <Loading/>}
                        <Header>
                            {title}
                        </Header>

                        <Content dangerouslySetInnerHTML={{__html: content}}/>
                        {/*使用dangerouslySetInnerHTML*/}
                    </DetailContent>
                </DetailWrapper>
            </ThemeProvider>
        )
    }

    componentDidMount() {
        //!!!!!!this.props.match.params.id就是路由中拿到的/:id参数
        this.props.getDetail(this.props.match.params.id);
        this.props.initState()
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"]),
    theme: state.getIn(["header", "theme"]),
})

const mapDispatchToProps = (dispatch) => ({
    getDetail: (id) => {
        dispatch(actionCreator.getDeatilAction(id))
    },
    initState: (id) => {
        dispatch(actionCreator.initStateAction())
    },
})
//withRouter(Detail),让Detail有能力去获取Router里的所有参数和内容
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
