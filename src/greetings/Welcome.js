const Greeting = require("./Base");
const m = ["SELAMAT DATANG", "WELCOME", "HAPPY JOIN", "NEW MEMBER", "NEW PARTICIPANT", "HELLO"]
const l = ["Welcome to", "Thanks to join", "Selamat Datang Di"]
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
