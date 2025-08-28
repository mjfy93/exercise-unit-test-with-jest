let oneEuroIs = {
    "JPY": 156.6, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
let dollar = 0;
let yen = 0;
let pound = 0;
//Euro to Dollar
function fromEuroToDollar(euro) {
    dollar = euro * oneEuroIs.USD;
    return dollar;
}
//Dollar to Yen
function fromDollarToYen() {
    yen = dollar*oneEuroIs.JPY;
    return yen;
}


//Yen to Pound
function fromYenToPound() {
    pound = yen/oneEuroIs.GBP;
    return pound;    
}

console.log(fromEuroToDollar(1), fromDollarToYen(1), fromYenToPound(1));
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};