// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temmp = [1111, 1];
// 1、
// 什么是温度幅度，是最大和最小温度之间的差距
// 如何计算最高和平均温度的
// 什么是传感器错误 ，发生错误时应该怎么办

// 2、
// 如何忽略错误
// 如何在数组中找到最大值 和 最小值 从最大值减去最小值
// 返回最大和最小的幅度值

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const aplitude = calcTempAmplitude(temperatures, temmp);
console.log(aplitude);

// 问题2
// 函数现在应该解说两个温度数组

// 当我们有两个数组时 是否需要两个方法 no
// 可以合并两个数组


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:')),
  };
  console.log(measurement);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// 识别错误
console.log(measureKelvin());

console.log('------------');
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const aplitude = calcTempAmplitudeBug([1, 6, 6], [6, 7, 9]);
console.log(aplitude);


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let content = ``;
  for (let i = 0; i < arr.length; i++) {
    content += `${arr[i]} in ${i + 1} days... `;
  }
  console.log('...' + content);
  return content;
};

printForecast(data1);
printForecast(data2);
*/
