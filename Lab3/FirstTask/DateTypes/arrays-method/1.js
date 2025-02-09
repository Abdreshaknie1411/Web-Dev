let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]

let arr1 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr1.splice(0, 3, "Let's", "dance");

alert( arr1 ) // now ["Let's", "dance", "right", "now"]

let arr2 = ["t", "e", "s", "t"];

alert( arr2.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr2.slice(-2) ); // s,t (copy from -2 till the end)

let arr3 = [1, 2];

// create an array from: arr and [3,4]
alert( arr3.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr3.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr3.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6