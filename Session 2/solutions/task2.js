// Salary
// The boss of a company notices that more and more employees are spending time on websites that distract them. To prevent this, he introduces surprise checks on the open tabs of his employees' browsers. Depending on the open website in the tab, the following fines apply:
// ⦁ "Facebook" -> 150 Bitcoins
// ⦁ "Instagram" -> 100 Bitcoins
// ⦁ "Reddit" -> 50 Bitcoins
// One lines are read from the console:
// ⦁ The salary - a number in the range [500...1500]
// Then n number of times a website name is read from the console - text
// Output:
// ⦁ If the salary becomes less than or equal to 0 during the check, "You have lost your salary." is printed on the console and the program terminates.
// ⦁ Otherwise, after the check, the remaining salary is printed on the console (to be displayed as an integer).
// BONUS
// Add sites that will increase the worker's salary.

let salary = 1000;
const facebookPenalty = 150;
const instagramPenalty = 100;
const redditPenalty = 50;
const openedTabs = [`Facebook`, `Instagram`, `Reddit`, `Github`, `Facebook`, `Facebook`, `Facebook`, `Facebook`, `Facebook`]

for (let i = 0; i < openedTabs.length; i++) {
    if (openedTabs[i] === `Facebook`) {
        salary -= facebookPenalty;
    }
    if (openedTabs[i] === `Instagram`) {
        salary -= instagramPenalty;
    }
    if (openedTabs[i] === `Reddit`) {
        salary -= redditPenalty;
    }
}

if (salary <= 0) {
    console.log(`You have lost your salary.`);
} else {
    console.log(salary);
}
