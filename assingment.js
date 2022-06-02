function anaToVori(vori) {
    // error worning massage
    if (vori <= 0) {
        return 'Please enter a possitive number greater than 1'
    }
    let ana = vori * 16;
    return ana;
}
const yourVori = 1; //here enter your input 
const totalVori = anaToVori(yourVori);
// console.log(totalVori)

// ----------------------------------------------------------------

// problem- 2:
function pandaCost(somosaQuentity, singaraQuentity, pizzaQuentity) {
    const perSomosaPrice = 7;
    const perSingaraPrice = 10;
    const perPizzaPrice = 15;
    // PRICE CALCULATION
    const somosaPriceQuentity = somosaQuentity * perSomosaPrice;
    const singaraPriceQuentity = singaraQuentity * perSingaraPrice;
    const pizzaPriceQuentity = pizzaQuentity * perPizzaPrice;

    // ADD ALL PRICE CALTULATION
    const totalPrice = somosaPriceQuentity + singaraPriceQuentity + pizzaPriceQuentity;
    return totalPrice;
}
const yourTotalPrice = pandaCost(1, 2, 3); //here enter your input
console.log(yourTotalPrice);
// --------------------------------------------------------------------------

//problem-3:
function picnicBudget(giveMoney) {
    const first100People = 5000;
    const second100People = 4000;
    const last100People = 3000;
    // error worning massage
    if (typeof giveMoney != 'number') {
        return 'Please enter a number'
    }
    if (giveMoney <= 100) {
        const countFirst = giveMoney * first100People;
        return countFirst;
    }
    else if (giveMoney >= 100 && giveMoney <= 200) {
        const countSecond = giveMoney * second100People;
        return countSecond;
    }
    else {
        const countLast = giveMoney * last100People;
        return countLast;
    }
}
const totalCalculation = picnicBudget(100) // here enter your input
// console.log(totalCalculation)
// ------------------------------------------------------------

// problem - 4
function oddFriend(friends) {
    let find = friends[0];
    for (let i = 0; i < firends.length; i++) {
        let element = firends[i]
        if (element < find) {
            find = element;
        }
    }
    return find;
}
let firends = ['kabir', 'mubin ahmed', 'tahsan', 'rifat hossin', 'kamrul'];
const allFriend = oddFriend(firends);
// console.log(allFriend);





