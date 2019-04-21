import styled,{keyframes} from "styled-components"
export const LoadingWrapper=styled("div")`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    width:100%;
    .pic{
        width:20%;
        height:100px;
        float:right;
        border-radius:10px;
        background:#ccc
    }
`
const loadingForward = keyframes` 
    0%{
        width:40%;
    }
    100%{
        width:95%;
    }
`
const loadingBack = keyframes` 
    0%{
        width:95%;
    }
    100%{
        width:40%;
    }
`
export const LoadingInfo=styled("div")`
    width:80%;
    float:left;
    .title{
        width: 30%;
        height: 27px;
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        background:#ccc;
        margin-bottom:10px;
    }
    .desc{
        width:95%;
        height:24px;
        line-height:24px;
        font-size:13px;
        background:#ccc;
        margin-bottom:5px;
        animation:${loadingForward} .5s linear infinite alternate;
        &:last-child{
            animation:${loadingBack} .5s linear infinite alternate;
        }
    } 
`
