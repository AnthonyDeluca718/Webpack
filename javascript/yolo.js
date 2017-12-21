const cash = require('./cashMoney').cash
const money = require('./cashMoney').money

function yolo () {
    console.log('YOLO')
    cash()
    money()
}

module.exports = yolo