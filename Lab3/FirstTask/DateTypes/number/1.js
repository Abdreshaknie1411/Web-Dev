let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

let num1 = 1.23456;

console.log( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23



console.log(Math.floor(num1));//1
console.log(Math.ceil(num1));//2
console.log(num1.toFixed(2));//1.23

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1


function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  console.log( randomInteger(1, 3) );