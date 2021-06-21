const Greeting = require("./Base");
const anu = ["GOODBYE", "INNALILAHI", "ALHAMDULILLAH", "MENINGGAL"]
const s = ["SI AJG", "SI BABI", "SI WIBU", "SI UDIN"]
const m = anu[Math.random(Math.floor() * anu.length)]
const l = s[Math.random(Math.floor() * s.length)]
module.exports = class Goodbye extends Greeting {
    constructor() {
        super();
        this.textTitle = m;
        this.textMessage = l+"{server}";
        this.colorTitle = "#df0909";
    }
};
