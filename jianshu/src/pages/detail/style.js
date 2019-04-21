import styled from "styled-components"
import {theme_color as color, theme_bg_color as bgColor,theme_content_bgColor as contentBgColor} from "../../statics/theme-variable"

export const DetailWrapper = styled.div`
     position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-999;
    overflow-y:auto;
    overflow-x:hidden;
    background:${bgColor}
`
export const DetailContent = styled.div`
    position:absolute;
    top:56px;
    left:50%;
    overflow:hidden;
    width:960px;
    transform:translateX(-50%);
    background:${contentBgColor}
    padding:20px 100px;
`
export const Header = styled.div`
    margin:50px 0 20px 0;
    font-size:34px;
    line-height:44px;
    color:${color};
    font-weight:bold;
`
export const Content = styled.div`
    color:${color};
    img{
        width:100%;
    }
    p{
        margin:25px 0 0;
        font-size:16px;
        line-height:30px;
    }
`
