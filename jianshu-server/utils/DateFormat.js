class DateFormat {
    constructor(date, formatStr = "yyyy-MM-dd HH:mm:ss") {
        this.date = new Date(date)
        this.formatStr = formatStr
    }

    format() {
        const y = this.date.getFullYear()
        const m = this.date.getMonth() + 1;
        const d = this.date.getDate();
        const hh = this.date.getHours();
        const mm = this.date.getMinutes();
        const ss = this.date.getSeconds();
        if (this.formatStr === "yyyy-MM-dd HH:mm:ss") {
            return `${y}-${m > 10 ? m : "0" + m}-${d > 10 ? d : "0" + d} ${hh > 10 ? hh : "0" + hh}:${mm > 10 ? mm : "0" + mm}:${ss > 10 ? ss : "0" + ss}`
        }
    }
}

module.exports = DateFormat
