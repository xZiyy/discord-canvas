const Greeting = require("./Base");
const amek = ["verification", "Mendaftar", "new verify"]
const p = ["verification to ", "Thanks for verify in "]
const e = amek[Math.floor(Math.random() * amek.length)]
const q = p[Math.floor(Math.random() * p.length)]
module.exports = class Verification extends Greeting {
    constructor() {
        super();
        this.textTitle = e;
        this.textMessage = q + " {server}";
        this.colorTitle = "#03A9F4";
    }
};
