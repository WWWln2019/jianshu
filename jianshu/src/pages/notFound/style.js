import styled from "styled-components"
import {theme_bg_color as bgColor} from "../../statics/theme-variable"
export const NotFoundWrappwer = styled("div")`
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background:${bgColor};
    .logo{
        position: absolute;
        left: 40px;
        top: 40px;
        width: 300px;
    }
`
export const NotFoundContent = styled("div")`
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    background:${bgColor}
    h3{
        margin: 40px 0 20px 0;
        font-weight: bold;
        text-align:center;
    }
    p{
        margin: 10px 0 30px 0;
        font-size: 14px;
    }
`
export const BackBtn = styled("div")`
    display:block;
    margin:0 auto;
    height:40px;
    line-height:40px;
    width:160px;
    border-radius:20px;
    background:#42C02E;
    text-align:center;
    a{
        color:#fff;
        text-decoration:none;   
    }
`
