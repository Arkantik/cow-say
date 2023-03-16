
const me = require("./information.js");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello, my name is ${me.name} and I'm in ${me.campus} campus! Mooooo`,
    e : "oO",
    T: "U ",
}));