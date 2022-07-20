'use strict';
/*
// 函数：默认参数
const bookings = [];

// ES6方法
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //  ES5使用的方法
  //  numPassengers = numPassengers || 1;
  //  price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

// 跳过参数的话 可以输入undefined
createBooking('LH123', undefined, 1000);
*/

/*
const flight = 'LH234';
const jonas = {
  name: 'JOnas Schmedtmann',
  passpost: 2471293108,
};
// flightNum只是flight的复制 ，在函数内更改时，没有改变外面flight的值
// 按值传递，按引用传递
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passpost === 2471293108) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// js原始类型复制 和 引用类型的区别
const flightNum = flight;
const passenger = flight;

const newPassport = function (person) {
  person.passpost = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
// 修改引用类型的数据后 再调用就出错了
checkIn(flight, jonas);
*/

/*
// js是具有一等函数的语言
// 1、函数是所谓的一等公民，这意味着函数被简单的视为值
// 高阶函数 函数可以触发事件回调函数  函数也可以返回函数

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// 高阶函数，接收一个函数
const transformer = function (str, fn) {
  console.log(str);
  // 调用回调函数
  console.log(`Transformed string:${fn(str)}`);
  console.log(`${fn.name}`);
};

transformer(`JavaSript is the best!`, upperFirstWord);
transformer(`JavaSript is the best!`, oneWord);

const high5 = function () {
  console.log(`🧶`);
};

// 例子：high5是回调函数，addEventListener是高阶函数
document.body.addEventListener('click', high5);

// JS一直在使用回调
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*
// 闭包
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greetArr('Hello')('Jonas');
*/

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //   book: function () {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// js是具有一等函数的 这样是可行的
const book = lufthansa.book;
// 会报错，因为现在的book函数是独立的  this指向的是undefined
// 有三种方法可以做到 调用、应用、绑定
// book(23, 'Sarah Williams');

// call()方法手动设置this关键字  希望this关键字指向的内容
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply 方法
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);

// bind 绑定方法
// 返回一个新函数 此关键字的绑定位置，所以它被设置为我们传递给bind的任何值
const bookEW = book.bind(eurowings);
const bookLh = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// 和事件监听器一起使用 Event
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();
// 在事件处理函数中，this关键字总是指向元素，该处理程序附加到其上
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// bind 方法的另外的应用
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// 用bind方法设置确定参数,绑定的值可以写null
// const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * .23;

// console.log(addVAT(100));
// console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.1);
console.log(addVAT2(200));
*/

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // 用户在和添加回复 所以这是得到的答案
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // 登记 answer  这是一个很好的短路用例，因为要执行的代码只是简单的一行
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};
poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
// [5,2,3]
// [1,5,3,9,6,1]
*/

/*
// 立即调用函数   例如async/await
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// 立即调用函数表达式  永远不会再次执行
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 56;
}
console.log(notPrivate);
*/

/*
// 闭包
const secureBooking = function () {
  // 调用这个函数 这个值外部无法访问
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
// 所以一个函数总是可以访问变量环境 创建它的执行上下文 ，即使执行环境消失之后
// 闭包是封闭变量，闭包使函数可以访问所有变量其父函数，即使父函数已经返回之后，所以函数保持对其外部范围的引用，即使那个外部范围消失之后，这基本上保留了整个范围链
const booker = secureBooking();
booker();
booker();
// 我们不必须手动创建闭包，这是JS完全自动完成，我们不需要做任何事

console.dir(booker);
*/

/*
// 闭包示例1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// f函数进行了重新分配
// 所以闭包总是确保一个函数不会失去连接，到它诞生地存在的变量
h();
f();
console.dir(f);

// 闭包示例2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3groups,each with ${perGroup}`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
// 由此证明  闭包具有优先权
const perGroup = 1000;
boardPassengers(180, 3);
*/

// 闭包编码挑战

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    // header存在于闭包中
    header.style.color = 'blue';
  });
})();
