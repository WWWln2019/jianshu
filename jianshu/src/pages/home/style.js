import styled from "styled-components"
import {
    theme_content_bgColor as contentBgColor,
    theme_color as color,
    theme_bg_color as bgColor,
    theme_title_color as titleColor,
    theme_link_color as linkColor,
    theme_hover_color as hoverColor
} from "../../statics/theme-variable"

export const HomeWrapper = styled.div`
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
export const HomeContent = styled.div`
    position:absolute;
    top:56px;
    left:50%;
    overflow:hidden;
    width:980px;
    transform:translateX(-50%);
    padding:20px;
    background:${contentBgColor}
`
export const HomeLeft = styled.div`
    width:65%;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner-img{
        width:100%;
    }
`
export const HomeRight = styled.div`
    width:30%;
    float:right;
`
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
    .more{
        text-decoration:none;
        color:${linkColor};
        line-height:32px;
        margin-left:10px;
        &:hover{
            color:${hoverColor};
        }
    }
`
export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:${color};
    background:#f7f7f7;
    border:1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    .topic-img{
        width:32px;
        height:32px;
        margin-right:10px;
        /*vertical-align:middle;*/
        display:block;
        float:left;
    }
`

export const ListItem = styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .pic{
        width:20%;
        height:100px;
        float:right;
        border-radius:10px;
    }
`
export const ListInfo = styled.div`
    width:80%;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:${titleColor};
        margin-bottom:10px;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
`

export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`
export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    cursor:pointer;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
`

export const WriterWrapper = styled.div`
    position:relative;
    width:278px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    box-sizing:border-box;
    padding:10px;
    .header{
        color:#969696;
        font-size:12px;
        line-height:20px;
        span:nth-child(2){
            position:absolute;
            right:30px;
            top:10px;
            cursor:pointer;
        }
        i{
            font-size:12px;
            display:inline-block;
            transition:all .2s ease-in;
        }
    }
`
export const WriterItem = styled.div`
    margin:10px 0;
    position:relative;
    overflow:hidden;
    padding-bottom:10px;
    border-bottom:.5px solid rgba(0,0,0,.09);
    .profile{
        float:left;
        /*display:block;*/
        width:40px;
        height:40px;
        margin-top:5px;
        border-radius:20px;
    }
    .info{
        padding:0 55px;
        p{
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
        }
        .author{
            font-size:15px;
            font-weight:700;
            line-height:30px;
            color:${titleColor}
        }
        .desc{
            font-size:12px;
            color:#969696;
            line-height:20px;
        }
    }
    .watch{
        &.watched{
            color:#fff;
            background:#349724;
        }
        position:absolute;
        top:0px;
        right:10px;
        border:1px solid #349724;
        background:transparent;
        width:60px;
        line-height:20px;
        height:20px;
        text-align:center;
        font-size:12px;
        color:#349724;
        border-radius:20px;
        strong{
            font-weight:bold;
        }
        &:hover{
            color:#fff;
            background:#349724;
        }
    }
`

export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    margin:30px 0;
    cursor:pointer;
`
export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:80px;
    height:80px;
    line-height:80px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;
    border-radius:40px;
    cursor:pointer;
    border:1px solid #ec6149;
    color:#ec6149;
`
