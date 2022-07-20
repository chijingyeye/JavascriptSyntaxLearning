'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const updateUI = function (acc) {
  // 显示左侧列表
  displayMovements(acc.movements);
  // 显示左侧底部数据
  calcDisplaySummary(acc);
  // 显示总余额
  calcDisplayBalance(acc);
};
// 左侧流水列表创建
const displayMovements = function (movements, sort = false) {
  // DOM的内容清空
  containerMovements.innerHTML = '';
  // 使用forEach方法遍历数组并创建对应数量元素，使用字符串模板对class和文本进行判断
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${i + 1} ${type}
      </div>
      <div class="movements__value">${mov}€ </div>
    </div>
  `;
    // insertAdjacentHtml方法用于向DOM中添加元素
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

// 对用户名进行操作
const createUsernames = function (accs) {
  // 循环传入的数组 在每次迭代中 操控了当前的账户对象，并为其编辑用户名
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
      .toLocaleUpperCase();
  });
};
createUsernames(accounts);

//  计算总余额
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayBalance(account1.movements);

// 计算左侧底部的数值
const calcDisplaySummary = function (acc) {
  // 计算存入
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  // 计算取出
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
  // 计算利息
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // 阻止默认行为
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value.toLocaleUpperCase()
  );
  console.log(currentAccount);
  // currentAccount && currentAccount.pin  这种方式也可以
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // 显示UI和计算信息
    console.log(`login`);
    // 清楚输入的字段
    inputLoginUsername.value = inputLoginPin.value = '';
    // blur()失去焦点
    inputLoginPin.blur();
    // 显示动作
    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    // 更新UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => inputTransferTo.value.toLocaleUpperCase() === acc.username
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    currentAccount.username !== receiverAcc.username
  ) {
    // 资金转账
    receiverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const Closebane = inputCloseUsername.value.toLocaleUpperCase();
  const ClosePin = Number(inputClosePin.value);
  if (
    currentAccount.username === Closebane &&
    ClosePin === currentAccount.pin
  ) {
    // findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1
    const index = accounts.findIndex(acc => acc.username === Closebane);
    // 删除账户对应对象
    accounts.splice(index, 1);
    // 隐藏UI界面
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const LoanAmount = Number(inputLoanAmount.value);
  if (
    currentAccount.movements.some(mov => mov >= LoanAmount * 0.1) &&
    LoanAmount > 0
  ) {
    currentAccount.movements.push(LoanAmount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// console.log(containerMovements.innerHTML);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice方法：此方法可将数组切片，类似字符串方法，并且创建一个新的数组
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // 不写参数的话 可以做到数组的浅拷贝
console.log([...arr]); // 前面使用扩展运算符也能做到  都可以

// splice拼接方法：类似切片方法，但是会影响原数组，原数组丢失了这部分,通常用于删除，第二个参数为删除计数
// console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

// reverse反转方法：反转数组  原数组也会被反转
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat方法：拼接数组
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // 也可以拼接

// join方法：将数组拼接成一个字符串 参数可指定拼接的分隔符
console.log(letters.join(' - '));

// at()方法 ES2022的最新方法 提取当前索引的值 at方法也可用于字符串
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// 两种传统的获取数组最后一个值的方法
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1));
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log(`--------forEach---------`);
// forEach() 方法对数组的每个元素执行一次给定的回调函数。
// 参数写什么不重要，第一个参数是当前元素数值，第二个参数是当前的索引，第三个参数是整个数组
// forEach将始终循环遍历整个数组，没有break和continue
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// 0 :function(200)
// 1 :function(450)
// 1 :function(400)
// ...
*/

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// forEach循环map也有三个参数，第一个是当前值，第二个是key，第三是整个map
currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// 为何避免混乱forEach循环Set 第二个参数和第一个参数内容一样
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}:${value}`);
});
*/

/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  // dogsJulia.slice(1, 3);
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/*
// 在js中有三个大而重要的数组方法 map,filter,reduce
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
*/

/*
// filter()过滤器
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// 也能使用三个参数  第一个数值，第二个索引，第三个数组本身
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
  // 不符合条件的将会被过滤，符合条件的进入新的数组
});
// 好处是可以链接其他方法，可混合字符串方法和数组方法
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
// reduce方法 数组中的所有元素为一个值

console.log(movements);
// 也能使用三个参数  第二个数组的当前元素，第三个是当前索引，第四个数组本身
// 但其实第一个参数是：实际上被称为蓄能器的东西
// acc蓄能器就像一个雪球
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`${i}:${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// max value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]); // 当试图寻找最大或者最小值时，不要写0
console.log(max);
*/

// 编码挑战2

/*
const calcAverageHumanAge = function (arr) {
  const humanAge = arr.map((dog, i) => {
    if (dog <= 2) {
      return dog * 2;
    } else {
      return 16 + dog * 4;
    }
  });
  console.log(humanAge);
  const human = humanAge.filter(dog => dog > 18);
  console.log(human);
  const humaAverage = human.reduce(
    (acc, dog, i, arr) => acc + dog / arr.length,
    0
  );
  console.log(humaAverage);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

/*
const eurToUsd = 1.1;
// 可以链接使用，只要他们返回一个新数组
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/

/*
// 编码挑战3
const calcAverageHumanAge = arr =>
  arr
    .map((dog, i) => (dog <= 2 ? dog * 2 : 16 + dog * 4))
    .filter(dog => dog > 18)
    .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
*/

/*
// find()方法 可以使用find方法来检索一个元素
// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

/*
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1

// includes()方法确定数组是否在其条目中包含某个值，返回true或 false

console.log(movements);
console.log(movements.includes(-130));
console.log(movements.some(mov => mov === -130)); // 和上面includes是一样的

// some()方法测试数组中的至少一个元素是否通过了提供的函数实现的测试。如果在数组中找到所提供函数为其返回 true 的元素，则返回 true；否则返回false。它不会修改数组
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// eevery()方法测试数组中的所有元素是否通过提供的函数实现的测试。它返回一个布尔值
console.log(account4.movements.every(mov => mov > 0));

// 单独的回调
const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
//flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8],
];
console.log(arr.flat());

const arrDeep = [
  [[1, 2], 3],
  [4, [5, 6]],
  [7, 8],
];
console.log(arrDeep.flat(2));
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
//flatMap  相当于map().flat() 但是使用这个效率高  只深入一层
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
*/

/*
// sort()方法顺序是在将元素转换为字符串的方法，然后将它们的 UTF-16 单元值序列用于制造时的方法，并返回列表
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

console.log(movements);

// return < 0, A, B
// return > 0, B, A
movements.sort((a, b) => a - b);

movements.sort((a, b) => b - a);
console.log(movements);
*/

// fill()方法将数组中的所有元素更改为静态值，从开始索引（默认0）到结束索引（默认array.length）。它返回修改后的数组

// 使用编程的方式创建数组

/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
*/

/*
// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

// 2.
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// ++
let a = 10;
console.log(++a);
console.log(a);

// 3.
const { deposits, withdrawwals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawwals += cur);
      // return sums;
      sums[cur > 0 ? 'deposits' : 'withdrawwals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawwals: 0 }
  );
console.log(deposits, withdrawwals);

// 4.
const deposits1 = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
    cur >= 1000 ? sums.push(cur) : cur;
    return sums;
  }, []);

console.log(deposits1);

// this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const expections = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(str => (expections.includes(str) ? str : capitzalize(str)))
    .join(' ');
  // 这里是已经处理好句子了  在return的时候再调用一次，使句子的第一个字母也转换成大写
  return capitzalize(titleCase);
};

console.log(convertTitleCase(`this is a nice title`));
console.log(convertTitleCase(`this is a LONG title but not too long`));

console.log(convertTitleCase(`and here is anotehr title with an EXAMPLE`));
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// 1.
dogs.forEach(food => (food.recFood = Math.trunc(food.weight ** 0.75 * 28)));
// 2.
const SarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${
    SarahDog.curFood > SarahDog.recFood ? 'much' : 'little'
  }`
);
console.log(SarahDog);
// 3.
const ownersEatToMuch = dogs
  .filter(dogs => dogs.curFood > dogs.recFood)
  .flatMap(own => own.owners);
const ownersEatToLittle = dogs
  .filter(dogs => dogs.curFood < dogs.recFood)
  .flatMap(own => own.owners);
// 4.
console.log(`${ownersEatToMuch.join('和')}的狗吃的多`);
console.log(`${ownersEatToLittle.join('和')}的狗吃的少`);

// 5.
console.log(
  `${
    dogs.some(dog => dog.curFood === dog.recFood) ? '有' : '没有'
  }🐕吃了相等的食物`
);
// 6.
const checkEatingOkey = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkey));

// 7.
console.log(dogs.filter(checkEatingOkey));

// 8.
const dogsSorted = dogs.slice(0).sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
