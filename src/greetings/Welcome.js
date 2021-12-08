const Greeting = require("./Base");
const m = ["New Member", "WELCOME"]
const l = ["Welcome to ", "Selamat Datang Di "]
const w = m[Math.floor(Math.random() * m.length)]
const u = l[Math.floor(Math.random() * l.length)]
module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = w;
        this.textMessage = u + " {server}";
        this.colorTitle = "#03A9F4";
    }
};
