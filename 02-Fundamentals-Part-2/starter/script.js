'use strict'

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');


function logger() {
    console.log('my name is yuxinhang');
}

// 调用函数
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`
    return juice;
}
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const orangeJuice = fruitProcessor(2, 4)
console.log(orangeJuice);

const num = Number('23');

function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}

console.log(calcAge2(1991));

const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}

// 箭头函数（非常重要）
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstNmae) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstNmae} retirement in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

function curFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = curFruitPieces(apples);
    const orangePieces = curFruitPieces(oranges);

    const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`
    return juice;
}

console.log(fruitProcessor(2, 3));
const calcAge = function (birthYeah) {
    return 2037 - birthYeah
}
const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
    if (retirement > 0) {
        return `${firstName} 还有 ${retirement} 年退休`;
    } else {
        return `${firstName} 已经退休了`;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins队获胜 Dolphins队分数:${avgDolphins} Koalas队分数:${avgKoalas}`
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas队获胜 Koalas队分数:${avgKoalas} Dolphins队分数:${avgDolphins} `
    } else {
        return `没有队伍获胜 Dolphins队分数:${avgDolphins} Koalas队分数:${avgKoalas}`
    }
}

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

console.log(checkWinner(avgDolphins, avgKoalas));

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(avgDolphins, avgKoalas));


// 数据结构  数组

const firend1 = 'Michael';
const firend2 = 'Steven';
const firend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(191, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas'

const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYeah) {
    return 2037 - birthYeah
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];

// 添加元素
const newLength = friends.push('Jay');  // 添加在末尾
console.log(friends);
console.log(newLength);

friends.unshift('John'); // 添加在开头
console.log(friends);

// 删除元素
friends.pop(); // 删除最后元素
const poped = friends.pop();
console.log(poped);
console.log(friends);

friends.shift(); // 删除第一元素
console.log(friends);

console.log(friends.indexOf('Steven')); // 返回蒜素在数组中的位置
console.log(friends.indexOf('Bob'));


friends.push(23)
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log(`包含Steven`);
}

const bills = [125, 555, 44];
const tips = [];
const total = []

const calcTip = function (Tip) {
    const thisTip = Tip >= 50 && Tip <= 300 ? Tip * 0.15 : Tip * 0.2;
    return thisTip;
}

tips.push(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]))
total.push(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2])

console.log(tips);
console.log(total);

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastNmae: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    firends: ['michael', 'Peter', 'Steven']
};

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    firends: ['michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey);

const inrerestedIn = prompt('你想知道关于jonas的什么？');

if (jonas[inrerestedIn]) {
    console.log(jonas[inrerestedIn]);
} else {
    console.log(`没有搜索到关于${inrerestedIn}的数据`);
}

jonas.location = 'Portugal';
jonas['twitter'] = '@JonasSchmedtmann';

console.log(jonas);

console.log(`${jonas.firstName}有${jonas.firends.length}个朋友,他最好的朋友叫${jonas.firends[0]}`);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    firends: ['michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYeah) {
    //     return 2037 - birthYeah;
    // }

    // calcAge: function () {
    //     // console.log(this);  
    // 对象里面的this指向的就是对象本身
    //     return 2037 - this.birthYeah;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas['age']);

console.log(jonas.getSummary());

const Mark = {
    name: 'Mark miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMi = this.weight / (this.height * this.height);
        return this.BMi;
    }
}
const John = {
    name: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMi = this.weight / (this.height * this.height);
        return this.BMi;
    }
}

Mark.calcBMI();
John.calcBMI();

if (Mark.BMi > John.BMi) {
    console.log(`${Mark.name} BMI is (${Mark.BMi}) > ${John.name} BMI is (${John.BMi})`);
} else if (John.BMi > Mark.BMi) {
    console.log(`${John.name} BMI is (${John.BMi}) > ${Mark.name} BMI is (${Mark.BMi})`);
} else {
    console.log('平局');
}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(`${jonasArray[i]}`);

    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log(`-------------------`);
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    //跳过当前循环

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log(`-------breank number-------`);
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    //终止当前循环

    console.log(jonasArray[i], typeof jonasArray[i]);
}

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['michael', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

for (let i = 0; i < 3; i++) {
    console.log(`3次`);
    for (let j = 0; j < 5; j++) {
        console.log(`5次`);
    }
}

for (let rep = 0; rep < 10; rep++) {
    console.log(`举重`);
}

let rep = 0;
while (rep < 10) {
    console.log(`举重`);
    rep++;
}

let dice;

while (dice !== 6) {
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`你掷了一个${dice}点的色子,循环结束`);
    } else {
        console.log(`你掷了一个${dice}点的色子`);
    }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const averagesum = sum / arr.length;
    return averagesum;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
*/

