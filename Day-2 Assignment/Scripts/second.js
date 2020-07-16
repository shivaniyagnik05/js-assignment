console.log("Hii");

//Methods of String
let text="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
console.log(text);

console.log(text.charCodeAt(0));
console.log(text.includes('xxxx'));
console.log(text.repeat('2'));
console.log(text.search('dolor'));
console.log(text.startsWith('Lorem'));


//Methods of Array
let fruits=["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2,0,"Lemon", "Kiwi"));
console.log(fruits);

let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin", "Morgan"];
let myChildren = arr1.concat(arr2, arr3); 
console.log(myChildren);
