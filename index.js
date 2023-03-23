const inFormation = require('./information.js');

const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `Mon nom est ${inFormation.nom} et je suis dans le campus ${inFormation.campus}`
}));

