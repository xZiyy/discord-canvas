const Greeting = require("./Base");
const amek = ["verification", "Mendaftar", "new verification"]
const p = ["verification to", "Thanks for verification", "thanks sudah mendaftar"]
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