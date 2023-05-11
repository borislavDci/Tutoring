class CashCounter {
    '50' = 10
    '20' = 0
    '10' = 10
    '5' = 25
    '2' = 25
    '1' = 25
    '0.5' = 25
    '0.2' = 25
    '0.1' = 25
    '0.05' = 25
    '0.02' = 25
    '0.01' = 25
    calculateChange(price, paid) {
        const allowedDenominations = [1, 2, 5, 10, 20, 50]
        const counterDenominations = Object.keys(this).sort((a, b) => b - a)
        if (!allowedDenominations.includes(paid)) return `We accept only the amounts ${allowedDenominations.join(', ')}`
        if (price > paid) return `Customer needs to pay €${price - paid} more`
        if (price === paid) return `Change: 0, Counter closed`
        let change = (paid - price).toFixed(2); /// Fixing the number because javascript can't do correct math operations with floating numbers
        const displayChange = counterDenominations.reduce((newObject, denom) => {
            if (change < denom) return newObject
            while (change >= Number(denom)) {
                if (this[denom]) { // Decrement the value of property 'denom' in the current object ('this') if it exists,
                    this[denom]--  // or return to grab a next denom. (if we don't have money to return to the customer.)
                } else {
                    return newObject;
                }
                change -= denom
                if (newObject[denom]) {
                    newObject[denom]++
                } else {
                    newObject[denom] = 1;
                }
                if (denom === counterDenominations.at(-1)) { break }
                change = Number(change).toFixed(2) //After every operation we are fixing the number because of javascript bug
            }
            return newObject
        }, {})
        if (change > 0) return `No exact tender available for the change.`
        return displayChange
    }
}
const cashCounter = new CashCounter();
console.log(cashCounter.calculateChange(1, 50))