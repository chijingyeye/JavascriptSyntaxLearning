'use strict';

const weekdays = ['mon', 'tue', 'web', 'thu', 'fri', 'sat', 'sun'];
const openinghours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24 + 12,
  },
};

// 本节第一部分所需的数据
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: openingHours, //Es6 之前引入对象需要这么写
  // ES6 对象文字
  openinghours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // 函数参数将会自动解构，并且也可以设置默认值
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

if (restaurant.openinghours && restaurant.openinghours.mon) {
  console.log(restaurant.openinghours.mon.open);
}

/*
//  属性名称
const properties = Object.keys(openinghours);
console.log(properties);

let openStr = `餐厅营业了${properties.length}天:`;

for (const day of Object.keys(openinghours)) {
  openStr += `${day},`;
}
console.log(openStr);

//  属性内容
const values = Object.values(openinghours);
console.log(values);

// Entire object
const entries = Object.entries(openinghours);
console.log(entries);

// 利用参数进行一个对象的嵌套解构
// [key,value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and clise at ${close}`);
}
*/

/*
// 可选链接 ?.
console.log(restaurant.openinghours.mon?.open);
console.log(restaurant.openinghours?.mon?.open);

const days = ['mon', 'tue', 'web', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openinghours[day]?.open ?? 'closed';
  console.log(`On ${day},we open at ${open}`);
}

// Methods
// 如果有order方法就调用 没有就输入后面的
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// 如果有orderRisotto方法就调用 没有就输入后面的
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

// 如果没有?.将要这样写
// if (users.length > 0) users[0].name;
// else console.log('User array empty');
*/

// for of
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
// for of [] 解构索引和内容
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);
*/

/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
  owner: '',
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// ||= OR赋值运算符
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// ??= 赋值空赋值运算符
rest1.numGuests ?? = 10;
rest2.numGuests ?? = 10;

// ??= 赋值空赋值运算符
// rest1.owner = rest1.owner && '<ANOUYMOUS>';
// rest2.owner = rest2.owner && '<ANOUYMOUS>';
rest1.owner &&= '<ANOUYMOUS>';
rest2.owner &&= '<ANOUYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/* 
// ?? 运算符
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// 判定值为无效值，而不是假值  null and  undefined 不包括 0 and ''
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*  || 和 &&
console.log('------Or------');
// || 可以使用任何数据类型 可以返回何数据类型  短路评估
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// 如果是虚假值则取下以恶搞值继续判断  知道返回真的值
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------AND------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
// 扩展运算符解构  在左边是其余模式 在右边是展开模式

// 其余模式
// 因为赋值运算符的右侧， 但是我们也可以在左侧使用它
const arr = [1, 2, ...[3, 4]];
// 在等号的左边
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [Pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherFood);
// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 函数运用
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; //扩展运算符
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// 拷贝数组
const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
// 适用于所有迭代，迭代：所有数组、字符串、映射（maps）、集合（sets）之类的东西，但不是对象
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

// 真实的例子
const ingredients = [
  // prompt("Let's make pastta! Ingredient 1?"),
  // prompt("Let's make pastta! Ingredient 2?"),
  // prompt("Let's make pastta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// objects 拷贝
const newResaurant = { foindenIn: 1998, ...restaurant, foinder: 'Guuseppe' };
console.log(newResaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);

console.log(restaurant);
console.log(restaurantCopy);
*/

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole,21',
  starterIndex: 1,
});

// 对象解构
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// 当我们处理一个API调用接口的结果时，这基本上意味着获取数据从另一个Web应用程序。

// 对象解构 重新命名
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// 对象解构时 没有数据时 设置默认值
const { menu = [], starterMenu: straters = [] } = restaurant;
console.log(menu, straters);

// 变异变量
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// 嵌套对象解构
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

//
/*
// 数组解构
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// 如果没有解构，得这样做
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// 通过解构
[main, secondary] = [secondary, main];
console.log(main, secondary);

// 一个函数的返回值  函数解构
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// 嵌套数组解构
const [i, , [j, k]] = nested;
console.log(i, j, k);

// 设置默认值
const [p = 1, q = 1, r = 1] = [8]; // 如果没有解构到值 则赋值默认值
console.log(p, q, r);
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printgoals: function (...num) {
    console.log(`输入球员的姓名分别是${num},传入球员的总数为${num.length}`);
  },
  // winningTeam: function () {
  //   console.log(
  //     `有可能获胜的队伍是${}`
  //   );
  // },
};

// 1.数组解构
const [players1, players2] = game.players;
console.log(players1, players2);
// 2.解构 多余的存放在fieldPlayers数组
const [gk, ...fieldPlayers] = [...players1];
// 3.合并数组
const allPlayers = [...players1, ...players2];
// 4.解构数组并且添加新的数据
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
// 5.解构嵌套对象
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(gk, fieldPlayers);
console.log(allPlayers);
console.log(players1Final);
console.log(team1, draw, team2);
// 6.函数通过参数解构 并且返回总数量
game.printgoals(...game.scored);
// 7. &&运算符的应用
team1 < team2 && console.log(`team1有可能获胜`);
team1 > team2 && console.log(`team2有可能获胜`);

*/

/*
// 编码挑战2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, el] of game.scored.entries()) {
  console.log(`${i + 1}.${el}`);
}
// 2.
const odds = Object.values(game.odds);
let value = 0;
for (const age of odds) {
  value += age;
}
value = value / odds.length;
console.log(value);
// 3.
const entries = Object.entries(game.odds);
console.log(entries);
for (const [team, odd] of entries) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  // const outoput = game?.[team] || 'draw';
  console.log(`Odd of ${teamStr}: ${odd}`);
}
*/

// const {
//   odds: { team1, x, team2 },
// } = game;

// console.log(`Odd of victory ${game.team2}: ${team2}`);
// console.log(`Odd of draw: ${x}`);
// console.log(`Odd of victory ${game.team1}: ${team1}`);

/*
// ES6  Set集合数据类型
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

// 只会显示不重复的数据
console.log(ordersSet);
// 集合可拆分字符串
console.log(new Set('Jonas'));
// 检查集合中有多少种不同的数据
console.log(ordersSet.size);
// 检查集合中是否包含此数据
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
// 集合中添加数据，类似于数组的添加方法
ordersSet.add('Garlic Bread');
// 集合中删除数据，类似于数组的删除方法
ordersSet.delete('Risotto');
// 删除集合中所有数据
// ordersSet.clear();

// set也可以进行循环操作
for (const order of ordersSet) console.log(order);

// 例子
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// 使用... 扩展运算符，构建新的数组
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// 利用这个方法可以得出数组中 不重复的数据数量
console.log(new Set(staff).size);
// 利用这个方法可以得出一个字符串有多少个字母
console.log(new Set('jonasschmedtmann').size);
// Set方法不完全替换数组
*/

/*
// ES6 map数据类型
const rest = new Map();
// 使用set()方法填充数据 set()方法返回更新后的全部数据；
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze,Ttaly');
console.log(rest.set(2, 'Lisbon,Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// 使用get()方法从map中读取数据 get()方法返回读取的数据；
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// 使用布尔值作为映射值
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// 使用has()方法从map中是否包含此数据
console.log(rest.has('categories'));

// 使用delete()方法从map中删除数据
rest.delete(2);
console.log(rest);

// map也有size属性，显示数据的总数
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.size);

// 删除map所有数据
// rest.clear();

// map可以用数组和对象来作为映射值
// 直接用数组作为键的话，读取不到，最好创建一个值替代
console.log(rest.get(arr));
*/

/*
const question = new Map([
  ['question', 'Whatis the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JaavaScript'],
  ['correct', 3],
  [true, 'Correct ✨'],
  [false, 'Try again!'],
]);
console.log(question);

// 将对象转换为map数据类型
console.log(Object.entries(openinghours));
// 利用对象的entries方法可以直接转换成map类型
const hoursMap = new Map(Object.entries(openinghours));
console.log(hoursMap);

// 一个检测程序
console.log(question.get('question'));
// 将map通过解构的形式实现循环
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
}

// 通过get()方法判断布尔值 ，然后通过布尔值取得对于的数据
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(question.get('correct') === answer));

// 将map转换成数组
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

// ES6如何选择数据结构, 每种数据解构的优缺点;

// 基本上有三种数据来源
// 1、可以写入数据，在程序源代码本身，如状态消息，将根据用户操作显示在网页上
// 2、数据可以来自用户界面
// 3、数据来自外部来源，通常是来自一个WebAPI

// 我们需要储存在某个地方，Javascript有四种内置的数据结构，所以需要在它们之前做出选择
// 1、我们只需要一个简单的值列表吗，如果需要，则可以选择数组和集合。
// 如果需要键值对，则可以选择对象和map

// 数组：需要储存值按顺序并且这些值有可能包含重复项，因为有很多数组方法
// 集合：数据不重复，有独特的值时，因为像搜索项目这样的操作，或者从集合中删除一个项目，集合比较快
// 对象：对象已传统的键值数据结构，编写和访问数据比较容易，如果需要函数作为值，那么绝对应该为此使用对象，所以在对象中，这些函数被称为方法，并且可以使用this关键字来访问属性
// map：映射键可以有任何数据类型，很容易迭代，并且很容易计算map的大小

/*
// 编码挑战3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. 获得不重复的set集合 解包为数组
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2. 删除key为64的数据
gameEvents.delete(64);
console.log(gameEvents);
// 3. 除以总长度
const time = [...gameEvents.keys()].pop();
console.log(
  `An even thappened,on average,every ${time / gameEvents.size} minters`
);
// 4.
for (const [score, item] of gameEvents) {
  const scoreValue = score <= 45 ? '上半场' : '下半场';
  console.log(`[${scoreValue}] ${score}:${item}`);
}
*/

/*
// 字符串方法
const airline = 'TAP Air portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

// 返回字符串的长度
console.log(airline.length);
console.log('B737'.length);

// 获取第一次出现的位置
console.log(airline.indexOf('r'));
// 获取指定字符串最后出现的位置，区分大小写
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

// 从长度4开始提取字符串 返回一个新的字符,提取的长度是第二个参数减去第一个参数
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// 可以定义一个负数 从末尾开始提取
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B和 E是中间座位
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('是中间座位');
  } else {
    console.log('不是中间座位');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('11A');
checkMiddleSeat('11E');

console.log(new String('jonas'));
*/

/*
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase()); // 转换为小写
console.log(airline.toUpperCase()); // 转换为大写

const passenger = 'jOnAS';
const passengerFun = function (name) {
  const passengerLower = name.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
};

console.log(passengerFun(passenger));

// 比较电子邮件
const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// trim()方法去除空格
const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// 替换
const priceGB = '288,97$';
// replace()方法替换指定字符串
const priceUS = priceGB.replace('$', '￥').replace(',', '.');
console.log(priceUS);

// 只会替换第一个
const announcement = `All passengers come to barding door 23. Boarding door 23!`;

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));
// 可替换全部
// console.log(announcement.replaceAll('door', 'gate'));

// includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.includes('Air'));

// 该startsWith()方法确定字符串是否以指定字符串的字符开头
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are NOT allowed on board`);
  } else {
    console.log(`Welcome aboard`);
  }
};

checkBaggage(`I have a laptop,some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);
*/

/*
// 9()方法获取一个模式并String通过搜索模式将 a 划分为一个有序的子字符串列表，将这些子字符串放入一个数组中，然后返回该数组。
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// join()该方法通过连接数组（或类似数组的对象join()）中的所有元素创建并返回一个新字符串，该数组由逗号或指定的分隔符字符串分隔。如果数组只有一个项目，则将返回该项目而不使用分隔符。
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('Jonas schmedtmann');
const passenger = 'jessica ann smith dabis';

// 填充
// padStart()方法用另一个字符串填充当前字符串（如果需要，可以多次），直到结果字符串达到给定长度。从当前字符串的开头应用填充。
// padEndz则是加在末尾
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('JOnas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard('125123534534636'));
console.log(maskCreditCard(6786723123123121));

//重复
//该repeat()方法构造并返回一个新字符串，该字符串包含调用它的字符串的指定数量的副本，并连接在一起
const message2 = 'Bad waether... All Departues Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

/*
// 编码挑战4  测试数据
// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // split方法通过换行符分解成数组
  const rows = text.split('\n');
  // 通过迭代器解构出索引 和 内容
  for (const [i, row] of rows.entries()) {
    // 创建两个常量 重构数据
    const [first, second] = row.toLowerCase().trim().split('_');
    // 返回字符串 第二个词字符串转换大写
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // 根据索引添加对应的表情
    console.log(`${output.padEnd(20)} ${'🛫'.repeat(i + 1)}`);
  }
});
*/

/*
// 后续练习所需的数据
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44);
  console.log(output);
}
*/
