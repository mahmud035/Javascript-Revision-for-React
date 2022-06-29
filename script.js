'use strict';

const numbers = [1, 2, 3, 4, 5];

const numbers2 = [7, 8];

// console.log(...numbers, ...numbers2);

// spread operator for destructuring.
let animal = {
  name: 'dog',
  color: 'brown',
  age: 7,
};

const { name, ...rest } = animal || {}; //* for error handling
// console.log(name, rest);

const sum = ({ name, color, age }) => {
  //* destructuring
  // console.log(name, color, age);
};

sum(animal);

// rest operator or rest parameters

/* const sum = (a, b, ...rest) => {
  console.log(a, b, rest);
  return a * b;
};

const result = sum(2, 4, 6, 8, 10, 12);
console.log(result); */

//Nest Object of Array

const dreamGirl = [
  {
    dream1: {
      name: 'bbu',
      height: '5.4',
      family: [{ father: 'rock', mother: 'shila', sister: 'chinki' }],
      age: undefined,
      contactInfo: [
        {
          facebook: {
            link: 'https://www.facebook.com/',
            followers: '12545',
            status: 'single',
            friendsList: [
              { name: 'rofik' },
              { name: 'jobbar' },
              { name: 'salam' },
              { name: 'borkot' },
              undefined,
            ],
          },
        },
        { instagram: 'https://www.instagram.com/' },
        { twitter: 'https://twitter.com/' },
        { github: 'https://github.com/' },
        { phone: ['01254823212', '02152457'] },
      ],
    },
  },
];

// console.log(dreamGirl[0].dream1.contactInfo[0].facebook.friendsList);
const friends = dreamGirl[0]?.dream1?.contactInfo[0]?.facebook?.friendsList;
// console.log(friends);

// TODO: Print the name of the friends
// Using forEach()
friends.forEach((friend) => {
  // console.log(friend);
  // console.log(friend?.name); //optional chaining
});

// Using for of loop
for (const friend of friends) {
  // console.log(friend);
  // console.log(friend?.name); //optional chaining
}

// loop
const persons = ['hero', 'broo', 'china', 'angel'];

// for loop
// for (let i = 0; i < persons.length; i++) {
//   const element = persons[i];
//   console.log(element);
// }

// for of loop
// for (const person of persons) {
//   console.log(person);
// }

const object = { a: 1, b: 2, c: 3 };
console.log(object['a']);

// for in loop
for (const property in object) {
  console.log(property);
  // console.log(object);
  // console.log(`${property}: ${object[property]}`);
}

// INFO: ম্যাপ কি ?  কিভাবে  কাজ করে ?

// ১) এরেকে লুপ করে একটা একটা করে এলিমেন্টকে ধরবে
//  ২) এরপর একটা ফাংশনকে কল করে সেই ফাংশনে এলিমেন্টগুলকে পাঠাবে।
// ৩) এই ফাংশন একটা নির্দিষ্ট কাজ করে যা রিটার্ন করবে তা একটা এরে
// ৪) সেই এরেকে রিটার্ব করবে

const numbers3 = [1, 2, 4, 6, 5, 10];

const temp = [];
for (let number of numbers3) {
  const square = number * number;
  temp.push(square);
}

console.log(temp);

// Using map()
const temp2 = numbers3.map((number) => number * number);
console.log(temp2);

// Filter()

// INFO: 1) filter হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে.
// 2) যতগুলো পাবে তত খুলো দিবে । না পাইলে খালি এরে দিবে
// 3) ফিল্টার  চেকপয়েন্ট অথবা শর্ত  সাপেক্ষে   কিছু এলিমেন্ট কে নিবে আবার কিছু এলিমেন্ট কে নিবে  না |

const products = [
  { id: 1, name: 'apple', price: 500, color: 'golden' },
  { id: 2, name: 'xiaomi', price: 124, color: 'black' },
  { id: 3, name: 'samsung', price: 200, color: 'yellow' },
  { id: 4, name: 'samsung2', price: 200, color: 'black' },
  { id: 5, name: 'lenovo', price: 300, color: 'pink' },
  { id: 6, name: 'xiaomi', price: 100, color: 'pink' },
  { id: 7, name: 'lenovo', price: 300, color: 'pink' },
];

const output1 = products.filter((pd) => pd.name == 'lenovo');
// console.log(output1);

const output2 = products.filter((pd) => pd.price > 100 && pd.price < 300);
// console.log(output2);

// এরে এর ভিতর থেকে  কিছু এলিমেন্ট কে বাদ দিয়ে  বাকি গুলা  কে নেওয়া
const output3 = products.filter((pd) => pd.color !== 'pink');
// console.log(output3);

const output4 = products.filter((pd) => pd.color !== 'black');
// console.log(output4);

// filter with three arguments

const numbers4 = [1, 2, 3, 4, 5];
const result2 = numbers4.filter(function (element, index, arr) {
  // console.log(index);
  // console.log(arr);
  return element > 2;
});
// console.log(result2);

// INFO: ফিল্টার এর ছোট ভাই ফাইন্ড find()

// find হচ্ছে যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে,
// শুধু মাত্র প্রথম এলিমেন্ট কে দিবে। না পাইলে আন্ডিফাইন দিবে

const output5 = products.find((pd) => pd.color == 'black');
console.log(output5);

// LEC:একটা মজার ব্যাপার হলো ভিতরে  ভিতরে সবাই লুপ ই  চালাচ্ছে
