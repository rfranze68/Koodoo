
exports.accountTypeChecker = (accountBalanceHistory) => {
  /***
  Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
  whether this array is of type A (variable) or type B (fixed).

  Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

  Type 🅱 is one where the balance amount changes by the same amount each month.
  ***/

  let result;
  const numberMonths = accountBalanceHistory.length;

  // Testing the "Numbers of Months", only calculate if 2 or more Months, otherwise, lack of sufficient data
  if (numberMonths >= 2) {
    // The logic below works for any case of variance type of amounts between months (DECREASES as asked, but also INCREASE)
    let currentAmount = accountBalanceHistory[0].account.balance.amount;
    let lastAmount = 0;
    let currentDifference = 0;
    let referenceDifference = 0;
    for (let idx = 1; idx < numberMonths; idx++) {
      lastAmount = accountBalanceHistory[idx].account.balance.amount;
      currentDifference = (lastAmount - currentAmount);
      if (idx === 1) {
        referenceDifference = currentDifference;
      } // if (idx === ...
      if (currentDifference !== referenceDifference) {
        result = 'A';
        break;
      } // if (currentDifference !== ...
      currentAmount = accountBalanceHistory[idx].account.balance.amount;
      result = 'B';       
    } // for (idx  ...
  } // if (numberMonths >= ...
  return result;  
}; // const accountTypeChecker = (accountBalanceHistory) =>

