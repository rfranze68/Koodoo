const { accountTypeChecker } = require('./koodoo');

// --------------------------------------------------
// Test 1 with 5 months and same decrease between them
const accountBalanceHistory1 = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    },
    {
      monthNumber: 3, // three months ago
      account: {
        balance: { amount: 300 },
      }
    },
    {
      monthNumber: 4, // four months ago
      account: {
        balance: { amount: 400 },
      }
    }
  ]

// Test 1 with 5 months and same decrease between them
test('TEST 1 - 5 Months, 4 Intervals Identical -> Result should output B', () => {
    const text1 = accountTypeChecker(accountBalanceHistory1);
    expect(text1).toBe('B');
});

// -----------------------------------------
// Test 2 with 4 months and different decrease
const accountBalanceHistory2 = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 10 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 150 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 300 },
    },
  },
  {
    monthNumber: 3, // three months ago
    account: {
      balance: { amount: 400 },
    }
  }
]

//Test 2 with 4 months and different decrease
test('TEST 2 - 4 Months, 3 Intervals Irregular -> Result should output A', () => {
  const text2 = accountTypeChecker(accountBalanceHistory2);
  expect(text2).toBe('A');
});

// -----------------------------------------
// Test 3 with 2 months, only one decrese
const accountBalanceHistory3 = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 150 },
    },
  }
]

// Test 3  with 2 months, only one decrese
test('TEST 3 - 2 Months, 1 Interval -> Result should output B', () => {
  const text3 = accountTypeChecker(accountBalanceHistory3);
  expect(text3).toBe('B');
});

// -----------------------------------------
// Test 4 with 1 months only
const accountBalanceHistory4 = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 150 },
    },
  }
]

//Test 4 with 1 month, lack insufficient data, return  UNDEFINED
test('TEST 4 - 1 Month, NO Interval, Insufficient Data -> Result should output UNDEFINED', () => {
  const text4 = accountTypeChecker(accountBalanceHistory4);
  expect(text4).toBe(undefined);
});