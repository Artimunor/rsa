export class CryptoMath {

    public static gcd(a: number, b: number) : number {
        if (b) {
            return this.gcd(b, a % b);
        } else {
            return Math.abs(a);
        }
    }

    public static isPrime(n: number) : boolean {

        if (n === 2) return true;

        if (n % 2 === 0) return false;

        for (var i = 3; i <= Math.sqrt(n); i = i + 2) {
            if (!this.isPrime(i)) continue;
            if (n % i === 0) return false;
        }

        return true;
    }

    public static getPrimes(max: number) : Array<number> {
        return this.getPrimesFromRange(2, max);
    }

    public static getPrimesFromRange(min: number, max: number): Array<number> {

        let primes: Array<number> = [];
    
        if (!arguments.length) return [];

        if (min < 0 || max < 0) return [];

        if (min === max) return this.isPrime(min) ? [min] : [];

        for (let i = min; i <= max; i++) {
            if (this.isPrime(i)) {
                primes.push(i);
            }
        }

        return primes;
    }

    public static extendedEuclidianAlgorithm(a:number, b:number) : number {
 
        let x: Array<number> = [0, 1];
        let q: Array<number> = [];
        let i = 0, a_tmp = a, b_tmp2, b_tmp = b;

        if (b_tmp != 0) {

            while (a_tmp % b_tmp != 0) {

                q[i] = Math.floor(a_tmp / b_tmp); 

                if (i > 1) {
                    x[i] = (x[i - 2] - x[i - 1] * q[i - 2] + a * a) % a ;
                }

                i++;
                console.log("a",a_tmp,"b",b_tmp);
                b_tmp2 = b_tmp
                b_tmp = a_tmp % b_tmp;
                a_tmp = b_tmp2
                console.log("a", a_tmp, "b", b_tmp, "a%b", a_tmp % b_tmp);
            } 
        }

        x[i] = (x[i - 2] - x[i - 1] * q[i - 2] + a * a) % a;
        console.log("x[" + i + "] =", x[i - 2], "-", x[i - 1], "*", q[i - 2], "mod", a, "=", x[i]);

        if(a_tmp == 1) {
            console.log("The Inverse of " + b + " mod " + a + " is " + x[i] + ". \nCheck: " + b + "*" + x[i] + " mod " + a + " = " + (b * x[i]) % a + " || d = " + q[i - 1]);
            return x[i];
        } else {
            console.log("No inverse since gcd(" + b + "," + a + ") != 1."); 
            return 0;
        } 
    }
}