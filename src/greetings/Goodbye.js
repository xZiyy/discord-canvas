const Greeting = require("./Base");
const anu = ["GOODBYE","BYE BYE"]
const s = ["leaving From "]
const m = anu[Math.floor(Math.random() * anu.length)]
const l = s[Math.floor(Math.random() * s.length)]
module.exports = class Goodbye extends Greeting {
    constructor() {
        super();
        this.textTitle = m;
        this.textMessage = l+"{server}";
        this.colorTitle = "#df0909";
    }
};
