// Smart Lily
// Lily is now N years old. For each of her birthdays, she receives a gift.
// ⦁ For odd birthdays (1, 3, 5...n) she receives toys.
// ⦁ For even birthdays (2, 4, 6...n) she receives money.
// For her second birthday, she receives 10.00 Bitcoins, and the amount increases by 10.00 Bitcoins for each subsequent even birthday (2 -> 10, 4 -> 20, 6 -> 30, etc.). Over the years, Lily has secretly saved the money. Lily's brother takes 1.00 bitcoin from the money she receives in the years when she gets money. Lily sold the toys she received over the years, each for P Bitcoins, and added the sum to her savings. With the money, she wants to buy a washing machine for X Bitcoins. Write a program that calculates how much money she has saved and whether she has enough to buy the washing machine.
// Input:
// The program reads 3 numbers entered by the user, each on a separate line:
// ⦁ Lily's age - an integer in the range [1...77]                                  1.10/2.21
// ⦁ The price of the washing machine - a number in the range [1.00...10 000.00]    1.170/2.1570.98
// ⦁ The unit price of a toy - an integer in the range [0...40]                     1.6/2.3
// Output:
// One line should be printed on the console:
// ⦁ If Lily's money is enough:
// ⦁ "Yes! {N}" - where N is the remaining money after the purchase.            1.Yes! 5.00
// ⦁ If the money is not enough:
// ⦁ "No! {M}" - where M is the amount that is not enough.                      2.No! 997.98
// The numbers N and M should be formatted to the second decimal place.
///////////////////////////////////////////////////////////////////////
// const lilyAge = 10;
// const washingMachinePrice = 170;
// const toysPrice = 6;
// RESULT === Yes! 5
///////////////////////////////
// const lilyAge = 21;
// const washingMachinePrice = 1570.98;
// const toysPrice = 3;
// RESULT === No! 997.98 is not enough
///////////////////////////////////////////////////////////////////////