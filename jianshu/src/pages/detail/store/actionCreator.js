import {CHANGE_DETAIL,INIT_STATE} from "./actionTypes"

import {articleDetail} from "../../../api"

const changeDetail = (data) => ({
    type: CHANGE_DETAIL,
    data
})

const getDeatilAction = (id) => (
    (dispatch) => {
        articleDetail(id).then((res) => {
            const {status, data} = res;
            if (status === 1) {
                dispatch(changeDetail(data))
            }
        })
    })
const initStateAction = (id) => ({
    type:INIT_STATE
})

export {
    getDeatilAction,
    initStateAction
}
