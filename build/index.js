"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interaction_1 = require("./utils/interaction");
const cryptomath_1 = require("./utils/cryptomath");
console.log("Please enter 2 prime numbers:");
interaction_1.requestNumberOne().then(numberOne => {
    interaction_1.requestNumberTwo().then(numberTwo => {
        console.log("Numbers entered:", numberOne, "and", numberTwo);
        console.log("GCD:", cryptomath_1.CryptoMath.gcd(numberOne, numberTwo));
        console.log("Primes between", numberOne, "and", numberTwo, ":", cryptomath_1.CryptoMath.getPrimesFromRange(numberOne, numberTwo));
        console.log("Extended Eucledian Algorithm:", cryptomath_1.CryptoMath.extendedEuclidianAlgorithm(numberOne, numberTwo));
    });
});
