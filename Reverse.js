let fruits = ["kiwi", "strawberry", "mango", "banana"];
let transformed = [];

for (let i = 0; i < fruits.length; i++) {
  let word = fruits[i];
  let reversed = "";

    for (let j = word.length - 1; j >= 0; j--) {
    reversed += word[j];
    }
 transformed.push(reversed.toUpperCase());
}
 console.log(fruits);
 console.log(transformed);