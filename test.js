// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;

    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar*156.6)/1.07;

    return valueInYen;
}
const fromYentoPounds = function(valueInYen) {
    let valueInPounds = (valueInYen * 0.87)/156.6;

    return valueInPounds;
}


test("One euro should be 1.07 dollars", function(){
    const {fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5*1.07
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});
test("One dollar should be should be 146.35514018691586 yen", function(){
    const {fromDollarToYen} = require('./app.js');
    const yen = fromDollarToYen(3.5)
    const expected = (3.5* 1.07)*156.6/1.07
    expect(fromDollarToYen(3.5)).toBe(512.2429906542056);
});
test("One yen should be 0.005555555555555556", function(){
    const {fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(3.5)
    const expected = (((3.5 * 1.07)*156.6/1.07)*0.87)/156.6
    expect(fromYenToPound(3.5)).toBe(0.019444444444444445);
});