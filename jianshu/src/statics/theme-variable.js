import theme from "styled-theming"

const theme_color=theme("mode",{
    light:"#333",
    dark:"#999"
})
const theme_title_color=theme("mode",{
    light:"#333",
    dark:"#c8c8c8"
})
const theme_login_color=theme("mode",{
    light:"#eee",
    dark:"#3f3f3f"
})
const theme_content_bgColor=theme("mode",{
    light:"#fff",
    dark:"#3f3f3f"
})
const theme_formItem_Color=theme("mode",{
    light:"#fff",
    dark:"rgba(255,255,255,.1)"
})
const theme_link_color=theme("mode",{
    light:"#ccc",
    dark:"#777"
})
const theme_hover_color=theme("mode",{
    light:"#777",
    dark:"#c8c8c8"
})
const theme_bg_color=theme("mode",{
    light:"#fff",
    dark:"#333"
})
const font_size=theme("fontSize",{
    big:"20px",
    normal:"16px"
})
export {
    theme_color,
    theme_bg_color,
    theme_title_color,
    theme_link_color,
    theme_hover_color,
    theme_login_color,
    theme_content_bgColor,
    theme_formItem_Color,
    font_size
}



