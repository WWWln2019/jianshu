import styled from "styled-components"

export const WriteWrapper = styled.div`
    position:relative;
`
export const Button = styled.div`
    position:absolute;
    top:0px;
    right:100px;
    font-size:13px;
    color:#595959;
    cursor:pointer;
    width:100px;
    height:40px;
    line-height:40px;
    text-align:center;
    &.dark{
        color:#ccc;
    }
    &.light{
        color:#969696;
    }
    i{
        margin-right:5px;
    }
    &:hover{
        background:rgba(0,0,0,.4);
        color:#fff;
    }
`
