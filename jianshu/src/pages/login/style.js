import styled from "styled-components"
import {
    theme_title_color as titleColor,
    theme_hover_color as hoverColor,
    theme_link_color as linkColor,
    theme_bg_color as bgColor,
    theme_content_bgColor as loginBgColor,
    theme_formItem_Color as formItemColor
} from "../../statics/theme-variable"

export const LoginWrapper = styled.div`
    position:absolute;
    top:56px;
    left:0;
    right:0;
    bottom:0;
    background:${bgColor};
    z-index:-1;
`

export const LoginContent = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    width:400px;
    transform:translate(-50%,-50%);
    background:${loginBgColor};
    box-shadow:0 0 10px rgba(0,0,0,.2);
    border-radius:2px;
    box-sizing:border-box;
    padding:50px;
    overflow:hidden;
`

export const LoginTab = styled.div` 
    &::before,&&::after{
        content:".";
        display:block;
        height:0;
        clear:both;
        visibility:hidden;
   }
  .left-border{
    border-left:1px solid #ccc;
  }
    
`
export const LoginTabTitle = styled.div`
    width:144.5px;
    float:left;
    text-align:center;
    line-height:50px;
    color:#969696;
    cursor:pointer;
    &.active{
        color:#ea6f5a;
        border-bottom:2px solid #ea6f5a;
    }
`
export const LoginTabItem = styled.div`
    margin:50px 0;
    &.more-sign{
        position:relative;
        p{
            color:#b5b5b5;
            font-size:12px;
            text-align:center;
            width:100px;
            margin:0 auto;
            background:${loginBgColor};
        }
        .bg{
            position:absolute;
            top:5px;
            left:0;
            z-index:-1;
            width:100%;
            height:1px;
            background:linear-gradient(90deg,${loginBgColor},#666,${loginBgColor});
        }
        .icon{
            width: 70px;
            height: 25px;
            display:block;
            float:left;
            margin-top:10px;
            cursor:pointer;
            &:hover{
                transform:scale(1.1)
            }
        }
    }
`
export const Form = styled.form`
    p{
        margin-top:20px;
        color:#969696;
        input{
            float:left;
        }
        a{
            float:right;
            text-decoration:none;
            cursor:pointer;
            color:${linkColor};
            &:hover{
                color:${hoverColor};
            }
        }
    }
    .checkMsg{
        line-height:20px;
        height:20px;
        font-size:12px;
        color:#ec6149;
        margin-bottom:5px;
    }
`
export const Input = styled.input`
    position:relative;
    width:100%;
    outline:none;
    -webkit-appearance:none;
    line-height:50px;
    box-sizing:border-box;
    padding:0 10px;
    border:1px solid #969696;
    background:${formItemColor};
    color:${titleColor};
    &.user-name{
        border-radius:5px 5px 0 0;
        border-bottom:none;
        z-index:1;
        &:focus{
            box-shadow:0 0 10px #3194d0;
        }
        &.error:focus{
            box-shadow:0 0 10px #ec6149;
        }
    }
    &.user-pwd{
        border-radius:0px 0px 5px 5px;
        &:focus{
            z-index:1;
            box-shadow:0 0 10px #3194d0;
        }
        &.error:focus{
            box-shadow:0 0 10px #ec6149;
        }
    }
               
`
export const Button = styled.button`
    margin-top:20px;
    width:100%;
    height:40px;
    background:#3194d0;
    outline:none;
    -webkit-appearance:none;
    border:none;
    border-radius: 40px;
    color:#fff;
    font-size:18px;
    position:relative;
    img{
        position:absolute;
        top:13px;
        left:100px;
        display:none;
    }
`
