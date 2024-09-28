/**
 * Method -> functions defined in an object (for key-value pair)
 * ============================================================================================================================================
 */

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
}

console.log(calculator.add(1, 2));
console.log(calculator.sub(5, 3));
console.log(calculator.mul(3, 3));


// shorthand
const shorthandCalculator = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
}



