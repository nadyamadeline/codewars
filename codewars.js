// <8kyu> return new array containing numbers from 0 to N - 1 
function array(n) {
    let arr = [];
    for (let i = 0; i < n; i++){
        arr.push(i);
    }
    return arr;
}

// <8kyu> return a square of an element
function square(arg){
    return Math.pow(arg,2);
}

// <7kyu> return the next perfect square
function nextPerfectSquare(n){
    let sqr = Math.sqrt(n);
    n < 0 ? console.log(0) : console.log(Math.pow(Math.floor(sqr)+1,2))
  }
nextPerfectSquare(6); // prints 9
nextPerfectSquare(4); // prints 9
nextPerfectSquare(0); // prints 1
nextPerfectSquare(-5); // prints 0
  
// <7kyu> limit string length
function solution(string,limit){
    if (string.length <= limit){
      console.log(string)
    } else {
      console.log(string.slice(0,limit)+`...`) 
    }
}
solution('test',3) // prints tes...

// <6kyu> song decoder
function songDecoder(song){
    let dcd = song.split('WUB').filter(Boolean).join(' ');
    console.log(dcd)  
    }
songDecoder("AWUBWUBWUBBWUBWUBWUBC") // prints A B C

// <7kyu> sum of odd number triangle
function rowSumOddNumbers(n) {
    let firstNum = (n-1)*n+1;
    let sum = firstNum*(n+1)-1;
    console.log(sum)
}
rowSumOddNumbers(5) // prints 125

/* Simpler answer, aka using the cubic power of the row number
function rowSumOddNumbers(n) {
    let sum = Math.pow(n,3);
    console.log(sum);
}
*/

// <6kyu> multiples of 3 or 5
function solution(number){
    let sum = 0;
    for (let i = 1; i < number; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    console.log(sum)
}
solution(10) // prints 23

// <6kyu> sort the odd
function sortArray(array) {
    let evenArr = [];
    let oddArr = [];
    let resultArr = [];

    for (let i = 0; i <= array.length - 1; i++){
        if (array[i] % 2 == 0){
           evenArr.push(array[i])
        } else {
            oddArr.push(array[i])
        }
    }

    oddArr.sort((a,b) => a - b);

    for (let i = 0; i <= array.length-1; i++){
        if (array[i]%2==0){
            resultArr.push(evenArr.shift())
        } else {
            resultArr.push(oddArr.shift())
        }
    }
    console.log(resultArr)
  }
  sortArray([5, 3, 2, 8, 1, 4]) // prints [1,3,2,8,5,4]

/*
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    console.log(array.map((x) => x % 2 ? odd.shift() : x));
 }
*/

// <7kyu> digit sum
function digitSum(str){
    let reducer = (accumulator,currentValue) => accumulator + Number(currentValue);
    while (str.length > 1){
        str = String(str.split('').reduce(reducer,0));
    }
    console.log(str)
}
digitSum('2468') // prints 2

// <7kyu> unique numbers
function uniqueNumbers(numbersArray) {
    let returnArr = [];
    for (let i = 0; i < numbersArray.length; i++){
        if (returnArr.includes(numbersArray[i])){
            continue;
        } else {
            returnArr.push(numbersArray[i])
        }
    }
    console.log(returnArr)
}
uniqueNumbers([1,1,2,2])

// <7kyu> rotate to max
const rotateToMax = n => {
    n = String(n);
    n = Number(n.split('').sort((a,b)=>b-a).join(''));
    console.log(n);
  }
rotateToMax(123) // prints 123
rotateToMax('123') // prints 123

// <6kyu> array difference
function arrayDiff(a, b) {
    let newArr = [];
  for (let i = 0; i < a.length;i++){
      for (let j = 0; j < b.length;j++){
          if (a[i].includes(b[j])){
            continue;
          } else {
              newArr.push(b[j])
          }
      }
  }
  console.log(newArr)
}
arrayDiff([3,4], [3]);

// <6kyu> unique in order
function uniqueInOrder(str){
    let newArr;
    let emptyArr = [];
    if (typeof str == 'string'){
        newArr = str.split('');
    } else {
        newArr = str;
    }
    for (let i = 0; i < newArr.length;i++){
        if (newArr[i] !=newArr[i+1]){
            emptyArr.push(newArr[i]);
        } else if (newArr[i] == newArr[i+1]){
            continue;
        }
    }
    console.log(emptyArr)
}
let input1 = 'AABBCCDDAABB'; 
uniqueInOrder(input1); // prints ['A','B','C','D','A','B']
let input3 = [1,2,2,2,3,3];
trim(input3); // prints [1,2,3]

