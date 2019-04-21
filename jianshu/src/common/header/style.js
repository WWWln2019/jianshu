import styled from "styled-components"
//必须这样引入，否则直接在样式中写background:url("../../statics/logo.png")，url会被解析成字符串
import logoPic from "../../statics/logo.png"
import {theme_color as color, theme_bg_color as bgColor, font_size} from "../../statics/theme-variable"

//创建一个组件，这个组件是一个带有样式的div标签，div的样式为如下：
export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
    background:${bgColor};
    font-size:${font_size}
`
export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    background:url(${logoPic}) center/contain;
    height:56px;
    width:100px;
`
export const Nav = styled.div`
    width:960px;
    height:100%;
    box-sizing:border-box;
    /*padding-right:100px;*/
    margin:0 auto;
`
export const NavItem = styled.div`
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
        &:hover{
            color:#ea6f5a
        }
    }
    &.active{
        color:#ea6f5a
    }
    line-height:56px;
    font-size:17px;
    padding:0 15px;
    color:${color};
    position:relative;
    &.profile{
        width:30px;
        height:56px;
        text-align:center;
        img{
            display:block;
            width:30px;
            height:30px;
            margin-top:13px;
            border-radius:15px;
            &:hover{
                cursor:pointer;
                transform:scale(1.1);
            }
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width:160px;
    height:38px;
    /*position:absolute;
    top:50%;
    left:180px;
    margin-top:-19px;*/
    margin:9px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    box-sizing:border-box;
    padding:0 30px 0 20px;
    font-size:14px;
    color:#666;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width:300px;  
    }
    /*入场的时候*/
    &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width:300px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }  
`

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`

export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    border:1px solid #ec6149;
    text-align:center;
    font-size:14px;
    &.reg{
        color: #ec6149;
        &:hover{
            background-color: rgba(236,97,73,.05);
        }
    }
    &.writing{
        background:#ec6149;
        color:#fff;
    }
    
`
export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .zoom{
        position:absolute;
        bottom:13px;
        right:13px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        } 
    }
`

export const SearchInfo = styled.div`
    position:absolute;
    top:56px;
    left:0;
    z-index:999;
    width:240px;
    padding:0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:${bgColor};
`

export const SearchInfoTitle = styled.div`
    margin:20px 0 15px 0;
    font-size:14px;
    line-height:20px;
    color:#969696;
`
export const SearchInfoSwitch = styled.div`
    float:right;
    font-size:13px;
    cursor:pointer;
    .span{
        font-size:13px;
        margin-right:2px;
        transition:all .2s ease-in;
        display:inline-block;
        transform-origin:center center;
    }
`
export const SearchInfoItem = styled.a`
    float:left;
    font-size:12px;
    line-height:20px;
    padding:0 5px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:2px;
    margin:0 10px 15px 0;
`
export const Setting = styled.div`
    position:absolute;
    top:57px;
    right:-30px;
    padding:10px;
    background:${bgColor};
    box-shadow: 0 0 5px rgba(0,0,0,.6);
    z-index:10;
    &::before{
        content:"";
        position:absolute;
        top:-9px;
        right:45px;
        border:9px solid transparent;
        border-top:none;
        border-bottom-color:${bgColor};
    }
    
`
export const SettingItem = styled.div`
    a{
        display:inline-block;
        height:40px;
        line-height:40px;
        text-align:center;
        color:#969696;
        border:1px solid #e5e5e5;
        &:first-child{
            border-radius:40px 0 0 40px;
            border-right:none;
           }
        &:last-child{
            border-radius:0 40px 40px 0;
            border-left:none;
        }
        &:hover{
            color:#ec6149;
            cursor:pointer;
        }
        &.active{
            color:#fff;
            background:#6dacf4;
        }
    }
    .moon{
        font-size:25px;
    }
    &.day-night-group{
        width:250px;
        box-sizing:border-box;
        padding:10px;
        .switch{
            float:right;
            a{
                width:60px;
            }
        }
    }
    &.setting-btn{
        text-align:center;
        a{
            width:45%;
        }
    }
    
`
