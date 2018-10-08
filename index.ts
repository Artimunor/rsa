import {requestNumberOne, requestNumberTwo} from "./utils/interaction"
import {CryptoMath} from "./utils/cryptomath"

console.log("Please enter 2 prime numbers:");

requestNumberOne().then(numberOne => {

    requestNumberTwo().then(numberTwo => {

        console.log("Numbers entered:", numberOne, "and", numberTwo);

        console.log("GCD:", CryptoMath.gcd(numberOne, numberTwo));

        console.log("Primes between", numberOne, "and", numberTwo, ":", CryptoMath.getPrimesFromRange(numberOne, numberTwo));

        console.log("Extended Eucledian Algorithm:", CryptoMath.extendedEuclidianAlgorithm(numberOne, numberTwo));
    });
});
