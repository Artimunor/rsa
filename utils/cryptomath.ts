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

        let p1,p2 = 0;

        if ( b > a) {
            p1 = b;
            p2 = a;
        } else {
            p1 = a;
            p2 = b;
        }

        let x: Array<number> = [1,0];
        let y: Array<number> = [0,1];

        let z1: number = x[0] * p1 + y[0] * p2; 
        let z2: number = x[1] * p1 + y[1] * p2;

        let q: number = Math.floor(z1 / z2);
        let i: number = 1;

        while (z2 != 1) {

            i++;
            x[i] = x[i - 2] - x[i - 1] * q; 
            y[i] = y[i - 2] - y[i - 1] * q;
            z1 = z2; 
            z2 = x[i] * p1 + y[i] * p2;
            q = Math.floor(z1 / z2);
        }

        return y[i]
    }
}