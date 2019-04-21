const theme_day_bg_color = "#fff";
const theme_day_color = "#333";
const theme_night_bg_color = "#3f3f3f";
const theme_night_color = "#999";
const theme_color=(theme=localStorage.getItem("theme"))=>{
    switch (theme) {
        case "dark":
            return {bgColor: theme_night_bg_color, color: theme_night_color}
        default:
            return {bgColor: theme_day_bg_color, color: theme_day_color}
    }
}
export {
    theme_color
}



