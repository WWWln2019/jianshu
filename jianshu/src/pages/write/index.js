import React, {PureComponent} from "react"

import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
/*import EasyImage from '@ckeditor/ckeditor5-easy-image'*/
import MyCustomUploadAdapterPlugin from "./MyUploadAdapter"
import {actionCreator} from "./store"

import {WriteWrapper, Button} from "./style"

class Write extends PureComponent {
    initEditor = (editor) => {
        this.editor = editor
    }

    render() {
        const {content, changeEditor, save, saveState, isLogin, theme} = this.props;
        if (theme === "dark") {
            import("./custom.css")
        }
        return isLogin ? (saveState === "发布成功" ? <Redirect to="/"/> : (
            <WriteWrapper>
                {/*经典编辑*/}
                <CKEditor
                    editor={ClassicEditor}
                    config={{extraPlugins: [MyCustomUploadAdapterPlugin]}}
                    data={content}
                    onInit={this.initEditor}
                    onChange={changeEditor}
                />
                <Button onClick={() => {
                    save(this.editor)
                }} className={theme === "dark" ? "dark" : "light"}>
                    <i className="iconfont">&#xe645;</i>{saveState}
                </Button>
            </WriteWrapper>
        )) : (<Redirect to="/login"/>)
    }

    /* componentUnmount() {
         this.editor.destroy().then(()=>{
         }).catch(err => {
             console.log(err)
         })
     }*/
}

const mapStateToProps = (state) => ({
    content: state.getIn(["write", "content"]),
    saveState: state.getIn(["write", "saveState"]),
    isLogin: state.getIn(["login", "isLogin"]),
    theme: state.getIn(["header", "theme"]),
})
const mapDispatchToProps = (dispatch) => ({
    changeEditor: (event, editor) => {
        const data = editor.getData();
        dispatch(actionCreator.changeArticleAction(data))
    },
    save: (editor) => {
        const data = editor.getData();
        const content = data
        const title = /(<h2>[\s\S]+<\/h2>)/.exec(data)[0].replace(/(<[a-zA-Z0-9]*>)|(<\/[a-zA-Z0-9]*>)/g, "")
        const desc = data.replace(/(<h2>[\s\S]+<\/h2>)/, "").substr(0, 70).replace(/(<[a-zA-Z0-9]*>)|(<\/[a-zA-Z0-9]*>)/g, "")
        dispatch(actionCreator.saveArticleAction({title, content, desc}))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Write)
