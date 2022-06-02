// problem 1: ana to bori 
// anaToVori  (16 ana 1 vori)


// problem 2: 

//pandaCost (3parameter: singara = $7, somossa = $10, jilapi = $15)


// problem 3: 
// picnicBudget

// problem 4:
// oddFriend
function compare(a, b) {
    if (a.toString() === b) {
        return true;
    } else {
        return false;
    }
}

const result = compare(25, 25);
console.log(result);
console.log("123" + 123);

let a = 'hi'
let b = 'there'
console.log(a + b)
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(array[i]);
}