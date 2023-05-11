class CashCounter {
    constructor() {
        this.denominations = {
            '50': 10,
            '20': 10,
            '10': 10,
            '5': 25,
            '2': 25,
            '1': 25,
            '0.5': 25,
            '0.2': 25,
            '0.1': 25,
            '0.05': 25,
            '0.02': 25,
            '0.01': 25
        }
    }
    calculateChange(price, paid) {
        const arr = Object.keys(this.denominations).filter(l => !(l.startsWith(0))).map(e => Number(e));
        if (arr.includes(paid)) {
            if (price > paid) {
                return `Customer needs to pay ${price - paid}€ more`;
            } else if (price === paid) {
                for (const index in this.denominations) {
                    if (Number(index) === paid) {
                        this.denominations[index] = this.denominations[index] + 1
                    }
                }
                return `Change: 0, Counter closed.`
            } else if (paid > price) {
                let dividend = (paid - price).toFixed(2);
                const obj = {};
                const denominations_keys = Object.keys(this.denominations).sort((a, b) => b - a);
                for (let index of denominations_keys) {
                    if (dividend >= Number(index)) {
                        let quotient = Math.floor(dividend / (Number(index)));
                        dividend = (dividend % Number(index))
                        obj[Number(index)] = quotient;
                        this.denominations[Number(index)] = (this.denominations[Number(index)] - quotient);
                    }
                }
                return obj;
            }
        } else {
            return `We accept only the amounts ${arr.join(', ')}`;
        }
    }
}
const cashCounter = new CashCounter();
console.log(cashCounter.calculateChange(1, 50)); // { '2': 2, '5': 1, '20': 2 }
console.log(cashCounter.calculateChange(33.33, 50)); // { '1': 1, '5': 1, '10': 1, '0.5': 1, '0.1': 1, '0.05': 1, '0.02': 1 }
console.log(cashCounter.calculateChange(46.67, 50)) // { '1': 1, '2': 1, '0.2': 1, '0.1': 1, '0.02': 1, '0.01': 1 }