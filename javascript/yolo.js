const cash = require('./cashMoney').cash
const money = require('./cashMoney').money

function yolo () {
    console.log('Yolo')
    cash()
    money()
}

module.exports = yolo