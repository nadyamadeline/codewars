// <8kyu> return new array containing numbers from 0 to N - 1
function array(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}

// <8kyu> return a square of an element
function square(arg) {
  return Math.pow(arg, 2);
}

// <7kyu> return the next perfect square
function nextPerfectSquare(n) {
  let sqr = Math.sqrt(n);
  n < 0 ? console.log(0) : console.log(Math.pow(Math.floor(sqr) + 1, 2));
}
nextPerfectSquare(6); // prints 9
nextPerfectSquare(4); // prints 9
nextPerfectSquare(0); // prints 1
nextPerfectSquare(-5); // prints 0

// <7kyu> limit string length
function solution(string, limit) {
  if (string.length <= limit) {
    console.log(string);
  } else {
    console.log(string.slice(0, limit) + `...`);
  }
}
solution("test", 3); // prints tes...

// <6kyu> song decoder
function songDecoder(song) {
  let dcd = song.split("WUB").filter(Boolean).join(" ");
  console.log(dcd);
}
songDecoder("AWUBWUBWUBBWUBWUBWUBC"); // prints A B C

// <7kyu> sum of odd number triangle
function rowSumOddNumbers(n) {
  let firstNum = (n - 1) * n + 1;
  let sum = firstNum * (n + 1) - 1;
  console.log(sum);
}
rowSumOddNumbers(5); // prints 125

/* Simpler answer, aka using the cubic power of the row number
function rowSumOddNumbers(n) {
    let sum = Math.pow(n,3);
    console.log(sum);
}
*/

// <6kyu> multiples of 3 or 5
function solution(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}
solution(10); // prints 23

// <6kyu> sort the odd
function sortArray(array) {
  let evenArr = [];
  let oddArr = [];
  let resultArr = [];

  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] % 2 == 0) {
      evenArr.push(array[i]);
    } else {
      oddArr.push(array[i]);
    }
  }

  oddArr.sort((a, b) => a - b);

  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] % 2 == 0) {
      resultArr.push(evenArr.shift());
    } else {
      resultArr.push(oddArr.shift());
    }
  }
  console.log(resultArr);
}
sortArray([5, 3, 2, 8, 1, 4]); // prints [1,3,2,8,5,4]

/*
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    console.log(array.map((x) => x % 2 ? odd.shift() : x));
 }
*/

// <7kyu> digit sum
function digitSum(str) {
  let reducer = (accumulator, currentValue) =>
    accumulator + Number(currentValue);
  while (str.length > 1) {
    str = String(str.split("").reduce(reducer, 0));
  }
  console.log(str);
}
digitSum("2468"); // prints 2

// <7kyu> unique numbers
function uniqueNumbers(numbersArray) {
  let returnArr = [];
  for (let i = 0; i < numbersArray.length; i++) {
    if (returnArr.includes(numbersArray[i])) {
      continue;
    } else {
      returnArr.push(numbersArray[i]);
    }
  }
  console.log(returnArr);
}
uniqueNumbers([1, 1, 2, 2]);

// <7kyu> rotate to max
const rotateToMax = (n) => {
  n = String(n);
  n = Number(
    n
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
  console.log(n);
};
rotateToMax(123); // prints 123
rotateToMax("123"); // prints 123

// <6kyu> unique in order
function uniqueInOrder(str) {
  let newArr;
  let emptyArr = [];
  if (typeof str == "string") {
    newArr = str.split("");
  } else {
    newArr = str;
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] != newArr[i + 1]) {
      emptyArr.push(newArr[i]);
    } else if (newArr[i] == newArr[i + 1]) {
      continue;
    }
  }
  console.log(emptyArr);
}
let input1 = "AABBCCDDAABB";
uniqueInOrder(input1); // prints ['A','B','C','D','A','B']
let input3 = [1, 2, 2, 2, 3, 3];
uniqueInOrder(input3); // prints [1,2,3]

// <7kyu> descending order
function descendingOrder(n) {
  console.log(
    Number(
      String(n)
        .split("")
        .sort((a, b) => b - a)
        .join("")
    )
  );
}
descendingOrder(12345); // prints 54321

// <8kyu> warn the sheep
function warnTheSheep(arr) {
  let n = arr.length;
  let count = 0;

  if (arr[n - 1] == "wolf") {
    console.log("Pls go away and stop eating my sheep.");
  } else {
    for (let i = n; i > 0; i--) {
      if (arr[i] == "sheep") {
        count++;
      } else if (arr[i] == "wolf") {
        break;
      }
    }
    console.log(`Oi! Sheep no. ${count}! You are about to be eaten by a wolf!`);
  }
}
warnTheSheep(["sheep", "sheep", "wolf"]); // prints 'Pls go away and stop eating my sheep.'
warnTheSheep(["sheep", "sheep", "wolf", "sheep", "sheep"]); // prints 'Oi! Sheep no. 2! You are about to be eaten by a wolf!'
warnTheSheep(["sheep", "sheep", "wolf", "sheep", "sheep", "sheep"]); // prints 'Oi! Sheep no. 3! You are about to be eaten by a wolf!'
warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]);

// <6kyu> array diff
function arrayDiff(a, b) {
  let result = a.filter((x) => b.includes(x) == false);
  if (a.length > 0 && b.length > 0) {
    console.log(result);
  } else {
    console.log(a);
  }
}
arrayDiff([1, 2, 2, 2, 3], [2, 3]); // prints [1]
arrayDiff([], [4, 5]); // prints []
arrayDiff([1, 8, 2], []); // prints [1,8,2]

/* more intuitive answer, not using filter
function arrayDiff(a, b){
    let newArr = [];
    if (a.length > 0 && b.length > 0){
        for (let i = 0; i < a.length; i++){
            if (b.indexOf(a[i]) == -1){
                newArr.push(a[i]);
            }
        }
        console.log(newArr);
    } else {
        console.log(a);
    }
}
*/

// <7kyu> missing number
// with sort
function missingNumber(arr) {
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i + 1) {
      continue;
    } else if (arr[i] != i + 1) {
      console.log(i + 1);
      break;
    }
  }
}
missingNumber([2, 1, 4, 5]); // prints 3

// without sort
function missingNumber2(arr) {
  let result = 0;
  for (let i = 1; i <= arr.length + 1; i++) {
    if (arr.includes(i) == false) {
      result += i;
    }
  }
  console.log(result);
}
missingNumber2([2, 1, 4, 5]); // prints 3

// <7kyu> find missing number
function findMissingNumbers(arr) {
  let result = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    if (arr.indexOf(i) == -1) {
      result.push(i);
    }
  }
  console.log(result);
}
findMissingNumbers([-3, -2, 1, 5]); // prints [ -1, 0, 2, 3, 4 ]

// <6kyu> your order, please
function order(words) {
  let wordArr = words
    .split(" ")
    .sort((a, b) => a.match(/[0-9]/) - b.match(/[0-9]/))
    .join(" "); // /[0-9]/ is regex to match for digits (numbers)
  console.log(wordArr);
}
order("is2 Thi1s T4est 3a"); // prints 'Thi1s is2 3a T4est'

// <3kyu> simple calculator
function calculator(str) {
  let arr = str.split(" ");
  let newStr = [...arr];
  for (let i = 0; i < (newStr.length - 1) / 2; i++) {
    // (n-1)/2 is the num. of operation in the array
    if (arr.includes("*") || arr.includes("/")) {
      if (arr.includes("/")) {
        let n = arr.indexOf("/");
        arr.splice(n - 1, 3, Number(arr[n - 1]) / Number(arr[n + 1]));
      } else if (arr.includes("*")) {
        let n = arr.indexOf("*");
        arr.splice(n - 1, 3, Number(arr[n - 1]) * Number(arr[n + 1]));
      }
    } else if (arr.includes("+") || arr.includes("-")) {
      if (arr.includes("-")) {
        let n = arr.indexOf("-");
        arr.splice(n - 1, 3, Number(arr[n - 1]) - Number(arr[n + 1]));
      } else if (arr.includes("+")) {
        let n = arr.indexOf("+");
        arr.splice(n - 1, 3, Number(arr[n - 1]) + Number(arr[n + 1]));
      }
    }
  }
  console.log(Number(arr));
}

calculator("127"); // prints 127
calculator("2 + 3"); // prints 5
calculator("2 - 3 - 4"); // prints -5
calculator("10 * 5 / 2"); // prints 25
calculator("10 + 6 / 2"); // prints 13

// <6kyu> fibonacci series
function fibonacci(n) {
  let fibo = [0, 1];
  if (n <= 0) {
    console.log([]);
  } else if (n <= 1) {
    console.log(fibo);
  } else {
    for (let i = 2; i < n; i++) {
      fibo[i] = fibo[i - 2] + fibo[i - 1];
    }
  }
  console.log(fibo);
}
fibonacci(4);

// <5kyu> order weight
function orderWeight(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str[i].length - 1; j++) {
      str[i][j] = str[i][j] + str[i][j + 1];
    }
  }
  console.log(str);
}
orderWeight("103 123 4444 99 2000");

// <8kyu> n-th power
function index(array, n) {
  return array.length <= n ? -1 : Math.pow(array[n], n);
}
console.log(index([1, 2, 3], 2)); // prints 3^2=9

// <7kyu> high and low
function highAndLow(numbers) {
  let arr = numbers.split(" ");
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return `${max} ${min}`;
}
console.log(highAndLow("1 2 3 4 5")); // returns '5 1'

// <6kyu> find unique number
function findUniq(arr) {
  let base = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == base) {
      continue;
    } else if (arr[i] != base && arr[i + 1] == arr[i]) {
      return base;
    } else if (arr[i] != base && arr[i + 1] != arr[i]) {
      return arr[i];
    }
  }
}

// <8kyu> grade book
function getGrade(s1, s2, s3) {
  let mean = (s1 + s2 + s3) / 3;
  console.log(mean);

  if (90 <= mean && mean <= 100) {
    return "A";
  } else if (80 <= mean && mean < 90) {
    return "B";
  } else if (70 <= mean && mean < 80) {
    return "C";
  } else if (60 <= mean && mean < 70) {
    return "D";
  } else {
    return "F";
  }
}
console.log(getGrade(70, 70, 100));

// <7kyu> square digits
function squareDigits(num) {
  //  let square =  String(num).split('').map(x => Math.pow(x,2)).join('')
  //  return Number(square)
}
console.log(squareDigits(9119));

// <6kyu>
function getConsectiveItems(items, key) {
  items = String(items);
  // console.log(typeof items)
  if (!items.includes(key)) {
    return 0;
  } else {
    let count = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i] != items[i + 1]) {
        continue;
      } else if (items[i] == items[i + 1]) {
        count.push(items[i]);
        count.push(items[i + 1]);
        i++;
      }
    }
    return count.length;
  }
}
console.log(getConsectiveItems(9000, 0));

//
function solve(str) {
  str = str.split(" ");
  //   console.log(str[0].split(''))
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split("").reverse().join("");
  }
  //   str = str.join(' ')
  console.log(str);
}
solve("your code rocks");

function firstNonConsecutive(arr) {
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      num.push(arr[i + 1]);
      console.log(num);
      break;
    }
  }
  if (num) {
    return num;
  } else {
    return null;
  }
}
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

// <7kyu> string
function accum(s) {
  // your code
  s = s.toUpperCase().split("");

  for (let i = 1; i <= s.length - 1; i++) {
    s[i] = s[i] + s[i].repeat(i).toLowerCase();
    // console.log(typeof s[i])
  }
  return s.join("-");
}
console.log(accum("abcd"));

// <7kyu> Christmas tree
function xMasTree(n) {
  //complete this code
  let tree = [];
  for (let i = 0; i < n; i++) {
    tree.push(
      "_".repeat(n - i - 1) + "#".repeat(2 * i + 1) + "_".repeat(n - i - 1)
    );
  }
  tree.push(tree[0]);
  tree.push(tree[0]);
  return tree;
}
console.log(xMasTree(5));

// <5kyu> anagrams
function anagrams(word, words) {
  word = word.split("").sort().join("");
  console.log(word);
  let same_length = [];
  let anagram = [];
  for (let i = 0; i < words.length; i++) {
    let word_sort = words[i].split("").sort().join("");
    if (word == word_sort) {
      same_length.push(i);
    }
  }

  for (let i = 0; i < same_length.length; i++) {
    anagram.push(words[same_length[i]]);
  }

  return anagram;
}
console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));

// <4kyu> next bigger n
function nextBigger(n) {
  const sortedDigits = (n) => ("" + n).split("").sort((a, b) => b - a);
  const max = +sortedDigits(n).join("");

  for (let i = n + 1; i <= max; i++) {
    if (max === +sortedDigits(i).join("")) {
      return i;
    }
  }
  return -1;
}

// <7kyu> double sort
function dbSort(a) {
  let string = [];
  let number = [];
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] == "string") {
      string.push(a[i]);
    } else if (typeof a[i] == "number") {
      number.push(a[i]);
    }
  }
  string = string.sort();
  number = number.sort((a, b) => a - b);
  let result = number.concat(string);
  return result;
}

// <7kyu> Hell's kitchen
function gordon(a) {
  a = a.toUpperCase().split("");
  for (let i = 0; i < a.length; i++) {
    if (a[i] == "A") {
      a[i] = "@";
    } else if (a[i] == "E" || a[i] == "I" || a[i] == "O" || a[i] == "U") {
      a[i] = "*";
    }
  }
  a = a.join("");
  a = a.split(" ");
  for (let i = 0; i < a.length; i++) {
    a[i] = a[i].concat("!!!!");
  }

  return a.join(" ");
}

// <6kyu> pairs of bears
function bears(x, s) {
  s = s.split("");
  let bear = [];
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == "B" && s[i + 1] == "8") {
      bear.push(s[i]);
      bear.push(s[i + 1]);
      i++;
    } else if (s[i] == "8" && s[i + 1] == "B") {
      bear.push(s[i]);
      bear.push(s[i + 1]);
      i++;
    }
  }
  bear = bear.join("");

  let bool;
  if (bear.length / 2 >= x) {
    bool = true;
  } else {
    bool = false;
  }

  let result = [bear, bool];
  return result;
}
