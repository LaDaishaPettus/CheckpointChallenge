// 1. When is a function considered to be a callback function? when its passed into another function.

// 2. 
// function numReverse(num) {
//     return (
//         parseFloat(
//             num
//                 .toString()
//                 .split('')
//                 .reverse()
//                 .join('')
//         ) * Math.sign(num)
//     )
// }

// let rev = numReverse(25124) //42152
// console.log(rev)

// // 3. 
// function vowels(string) {
//     var v = string.match(/[aeiou]/gi);
//     return v === null ? 0 : v.length;
// }

// let word = vowels("Pineapple");
// console.log(word);

// function palindrome(word) {
//     var rev = word.split('').reverse().join('')
//     if (word == rev) {
//         console.log(`${word} is a palindrome`)
//     }
//     else {
//         console.log(`${word} is not a palindrome`)
//     }


// }
// palindrome('tacocat')




// 5. (undefined)
// var text = 'outside';
// function logIt() {
//     console.log(text)
//     var text = 'inside';
// }
// logIt();






// 6. They return the same thing because they're written exactly the same. 
// function foo1() {
//     return {
//         bar: "hello"
//     };
// }

// function foo2() {
//     return {
//         bar: "hello"
//     };
// }

// console.log(foo1(), foo2())