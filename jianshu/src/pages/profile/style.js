import styled from "styled-components"
import {
    theme_content_bgColor as contentBgColor,
    theme_color as color,
    theme_bg_color as bgColor,
    theme_title_color as titleColor,
    theme_link_color as linkColor,
    theme_hover_color as hoverColor
} from "../../statics/theme-variable"

export const ProfileWrapper = styled("div")`
    position:fixed;
    top:0;;
    left:0;
    right:0;
    bottom:0;
    z-index:-999;
    overflow-y:auto;
    overflow-x:hidden;
    background:${bgColor};
`
export const ProfileContent = styled("div")`
    position:absolute;
    top:56px;
    left:50%;
    overflow:hidden;
    width:960px;
    min-height:100%;
    transform:translateX(-50%);
    box-sizing:border-box;
    padding:20px;
    background:${contentBgColor};
    display:flex;
`

export const ProfileMain = styled("div")`
    width:66%;
    display:flex;
    flex-direction:column;
`
export const OtherWrapper = styled("div")`
    width:30%;
    box-sizing:border-box;
    padding:50px 0;
    margin-left:3%;
`

export const OtherItem = styled("div")`
    padding:20px 0;
    box-sizing:border-box;
    &:first-child{
        border-top:1px solid ${color};
    }
    border-bottom:1px solid ${color};
    .watch{
        .iconfont{
            font-size:18px;
            margin-right:10px;
        }
        a{
            font-size:14px;
            color:${color};
            text-decoration:none;
            cursor:pointer;
            line-height:45px;
            height:45px;
            &:hover{
                color:${hoverColor}
            }
        }
    }
    &.topic{
        h4{
            font-size:14px;
            color:#969696;
            line-height:20px;
        }
        a{  
            display:block;
            font-size:12px;
            color:#42c02e;
            text-decoration:none;
            line-height:20px;
            margin:10px 0 0 10px;
            &:hover{
                cursor:pointer;
            }
        }
    }
`
export const ProfileHeaderWrapper = styled("div")`
    .profile{
        width:80px;
        height:80px;
        border-radius:40px;
        vertical-align:top;
    }
`
export const ProfileHeaderInfo = styled("div")`
    display:inline-block;
    height:80px;
    margin-left:10px;
    box-sizing:border-box;
    color:${linkColor};
    padding:20px;
    .title{
        line-height:20px;
        height:20px;
    }
    .menu-list{
        //overflow:hidden;
        li{
            padding:5px;
            line-height:15px;
            height:15px;
            float:left;
            a{
                color:${hoverColor};
            }
            &:hover{
                a{
                    color:${hoverColor};
                 }
                cursor:pointer;
            }
            & + li{
                border-left:1px solid ${hoverColor} 
            }
        }
    }
`
export const NavTabWrapper = styled("div")`
`
export const NavTabBox = styled("div")`
    overflow:hidden;
    height:60px;
    border-bottom:1px solid #ccc;
`
export const NavTabItem = styled("div")`
     position:relative;
     float:left;
     font-size:16px;
     font-weight:bold;
     padding:0 50px;
     box-sizing:border-box;
     height:60px;
     line-height:60px;
     cursor:pointer;
     .link{
        text-decoration:none;
        color:#777;
     }
     &:hover,&.active{
        .link{
            color:${titleColor}
        }
        border-bottom:2px solid ${color};
     }
     .icon-wrapper{
        position:absolute;
        top:8px;
        left:15px;
        width:30px;
        height:32px;
        overflow:hidden;
     }
     .iconfont{
        &.article{
            font-size:30px;
            position:absolute;
            top:0;
            left:0;
        }
        &.info{
            position:absolute;
            top:0;
            left:15px;
            font-size:24px;
        }
        &.comment{
            position:absolute;
            top:0;
            left:15px;
            font-size:20px;
        }
        &.hot{
            position:absolute;
            top:0;
            left:15px;
            font-size:24px;
        }
        
     }
`
export const InfoWrapper = styled("div")`
    
`
export const InfoItem = styled("div")`
    border-bottom:1px solid #ccc;
    margin-bottom:10px;
    padding:0 30px 30px;
`
export const InfoTitle = styled("div")`
    margin:20px 0;
    .sm-profile{
        width:24px;
        height:24px;
        border-radius:24px;
        vertical-align:middle;
        margin-right:10px;
    }
    span{
        font-size:12px;
        color:${titleColor};
        &.action{
            margin-left:10px
            color:#969696;
        }
    }
`
export const InfoContent = styled("div")`
    padding:0 20px;
    border-radius:5px;
    border:1px solid rgba(0,0,0,.1);
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:rgba(0,0,0,.1);
    .watched-info{
        font-size:12px;
        line-height:40px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        color:${color};
    }
`
export const ContentInfo = styled("div")`
    display:flex;
    padding:20px 0;
    border-bottom:1px solid #969696;
    .watched-profile{
        width:48px;
        height:48px;
        border-radius:24px;
        flex-basis:48px;
    }
    .info{
        flex:2;
        padding:0 20px;
        h5{
            font-size:17px;
            color:${titleColor}
        }
        p{
            line-height:30px;
            font-size:12px;
            color:${color};
        }
    }
`
export const WatchedBtn = styled("div")`
    width:100px;
    height:40px;
    border:1px solid #42c02e;
    border-radius:24px;
    overflow:hidden;
    a{
        display:block;
        text-align:center;
        line-height:40px;
        color:#42c02e;
    }
    &:hover,{
         cursor:pointer;
         background:#42c02e;
          a{
            color:#fff;
          }
        }
    .unWatch{
       color:#fff;
       background:#42c02e;
       
    }
`


