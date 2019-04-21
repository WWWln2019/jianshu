import {CHANGE_ARTICLE, CHANGE_SAVE_STATE} from "./actionTypes"

import {articleEdit} from "../../../api"

const changeArticleAction = (data) => ({
    type: CHANGE_ARTICLE,
    data
})
const changeSaveStateAction = (state) => ({
    type: CHANGE_SAVE_STATE,
    state
})

const saveArticleAction = (data) => (
    async function (dispatch) {
        await dispatch(changeSaveStateAction(1));
        articleEdit(data).then((res) => {
            const {status} = res;
            //dispatch(changeArticleAction(data))
            if (status === 1) {
                dispatch(changeSaveStateAction(2))
            }
        })
    })

export {
    saveArticleAction,
    changeArticleAction
}
