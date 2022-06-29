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
  console.log(friend?.name); //optional chaining
});

// Using for of loop
for (const friend of friends) {
  // console.log(friend);
  console.log(friend?.name); //optional chaining
}


