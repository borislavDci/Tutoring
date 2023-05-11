# The Cashier
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


In this project, you are required to implement a cash register for a store using a JavaScript class. The cash register should be able to calculate the change due for a customer, after making a purchase.

### Requirements:

1. You should create a class named `CashCounter`. The constructor of this class should initialize an object representing the cash available in the register. This object should have keys representing the denominations and values representing the quantity of each denomination. The cash register should start with the following denominations and quantities:

    - '50': 10
    - '20': 10
    - '10': 10
    - '5': 25
    - '2': 25
    - '1': 25
    - '0.50': 25
    - '0.20': 25
    - '0.10': 25
    - '0.05': 25
    - '0.02': 25
    - '0.01': 25

2. The `CashCounter` class should have a method named `calculateChange(price, paid)`. This method should take two arguments:
    - `price`: The price of the item bought by the customer.
    - `paid`: The amount of money given by the customer.

4. The `calculateChange(price, paid)` method should:
    - Only accept the following denominations: 1, 2, 5, 10, 20 or 50 as the paid amount. If the paid amount is something else, it should return the message: `We accept only the amounts 1, 2, 5, 10, 20, 50`.

    - Check if the customer has paid enough to cover the price of the item. If not, it should return a message: `Customer needs to pay €xx more`.

    - Add the paid amount to the correct denomination in the cash register.
    If the price is equal to the amount paid, return a message: `Change: 0, Counter closed`.

    - Calculate the change due to the customer, starting from the highest denomination. Deduct the appropriate amount from each denomination in the cash register as it is used for change.

    - If it's not possible to give the exact change (because the cash register doesn't have the right denominations), it should return the message: `No exact tender available for the change`.

    - If it is possible to give exact change, it should return an object showing the denominations and quantity of each to be given as change.

### Examples:

```js
const cashCounter = new CashCounter();

console.log(cashCounter.calculateChange(1, 50)); // { '2': 2, '5': 1, '20': 2 }
console.log(cashCounter.calculateChange(33.33, 50)); // { '1': 1, '5': 1, '10': 1, '0.5': 1, '0.1': 1, '0.05': 1, '0.02': 1 }
console.log(cashCounter.calculateChange(46.67, 50)) // { '1': 1, '2': 1, '0.2': 1, '0.1': 1, '0.02': 1, '0.01': 1 }
```

### Notes:

Remember, the output of the `calculateChange(price, paid)` method will depend on the state of the cash register at the time of the call. The above examples assume a cash register that has just been initialized.

Good luck!

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### cashCounter

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Should be defined |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Returns correct message when paid is less than price |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Returns correct message when paid is equal to price |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Returns correct change and update cashBox when paid is more than price |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | Returns correct message for unacceptable denominations |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-the-cashier-problem)


[//]: # (autograding info end)