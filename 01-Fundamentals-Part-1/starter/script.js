
/*
let js = 'amzing';
console.log(40 + 9 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstNmae = "Jonas";
console.log(firstNmae);

// 变量名约定
let myFirstJob = 'Programmer';
let myCurrentJob = 'teacher';

let job1 = 'programmer';
let job2 = 'programmer';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastaName = 'Schmedtmann';
console.log(lastaName);

// 计算 运算符
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'jonas';
const lastName = 'Schemdtmann';
console.log(firstName + ' ' + lastName);

// 赋值运算符
let x = 10 + 5; // 15
x += 10; // x= x + 10
x *= 4; // x = x * 4 = 100
x++;
x--;
console.log(x);

//比较运算符
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2019);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = `I'm ${firstName} ${year - birthYear} ${job}`;
console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
console.log(jonas);

const age = 12;

if (age >= 18) {
    console.log('已满18岁😊');
} else {
    const yearLeft = 18 - age;
    console.log(`未满18岁👿,还差${yearLeft}岁`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`mark的BMI(${markBMI})大于john的BMI(${johnBMI})`);
} else {
    console.log(`john的BMI(${johnBMI})大于的markBMI(${markBMI})`);
}

// 类型转换

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// 类型强制
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');


let n = '1' + 1;
n = n - 1;
console.log(n);


// 5个 虚假值   0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Honas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log('有钱😲');
} else {
    console.log('没钱了');
}

let height = 0;
if (height) {
    console.log('是有高度的');
} else {
    console.log('高度未定义');
}

const age = '18';

if (age === 18) console.log('你刚成年');
if (age == 18) console.log('你刚成年');

const favourite = Number(prompt("你最喜欢的号码是什么"));
console.log(typeof favourite);

if (favourite === 23) { // "23" =23
    console.log('cool 23 是一个amzing 的数字');
} else if (favourite === 24) {
    console.log('cool 24 是一个amzing 的数字');
} else if (favourite === 9) {
    console.log('cool 9 是一个amzing 的数字');
} else {
    console.log('其余数字');
}

if (favourite !== 23) {
    console.log('数字不等于23');
}

const hasDriversLicense = true;  // A 变量
const hasGoddVision = true // A变量

console.log(hasDriversLicense && hasGoddVision);
console.log(hasDriversLicense || hasGoddVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoddVision) {
//     console.log('Sarah 会开车');
// } else {
//     console.log('别的内容');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoddVision && isTired);

if (hasDriversLicense && hasGoddVision && !isTired) {
    console.log('Sarah 会开车');
} else {
    console.log('别的内容');
}

const DolphinsScore = (96 + 108 + 89) / 3;
const KoalasScore = (88 + 91 + 110) / 3;

if (DolphinsScore > KoalasScore && DolphinsScore >= 100) {
    console.log(`Dolphins获胜 有奖金`);
} else if (KoalasScore > DolphinsScore && KoalasScore >= 100) {
    console.log(`Koalas获胜 有奖金`);
} else if (DolphinsScore === KoalasScore && DolphinsScore >= 100 && KoalasScore >= 100) {
    console.log(`平局了 都有奖金`);
} else {
    console.log(`没有获胜者 都没有奖金`);
}


const day = 'monday';

switch (day) {
    case 'monday':
        console.log(`今天是星期一`);
        break;
    case 'tuesday':
        console.log(`今天是星期二`);
        break;
    case 'wednesday':
        console.log(`今天是星期三`);
        break;
    case 'thursday':
        console.log(`今天是星期四`);
        break;
    case 'friday':
        console.log(`今天是星期五`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`今天是周末`);
        break;
    default:
        console.log(`无效的工作日`);
        break;
}

const age = 13;
// age >= 18 ? console.log(`可以喝酒`) : console.log(`可以喝水`);

const drink = age >= 18 ? `喝酒` : `喝水`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `喝酒`;
} else {
    drink2 = `喝水`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `喝酒` : `喝水`}`);
*/

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`账单价格为${bill},小费价格${tip},${bill + tip}`);