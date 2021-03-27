let weekDay = 'Monday';
const firstName = 'Monica';
console.log('I...and I quote \'To be or not to be\'');

let cat = {
    name: 'Man',
    color: 'Orange'
};
console.log('')

let dog = {
    name: 'Buddy',
    age: '9',
    gender: 'Male',
    color: 'White & Brown',
    favoriteFoods: ['tuna', 'eggs']

};

console.log(dog.age);
console.log(dog.gender);

let arr = [
    1,
    'test',
    false,
]

let animal = 'fox';
console.log('typeof animal');
animal = false;
console.log(typeof animal);

function sayHello(greeting) {
    console.log(greeting);
}

sayHello('Hello');
sayHello('Hola')

// FUNCTION & RESPONSE

function sayHello(greeting, firstName, lastName) {
    return greeting + ' ' + firstName + ' ' + lastName;
}
const response = sayHello('Hello', 'Monica', 'Parkinson');
console.log(response)

function sum(number1, number2) {
    return number1 + number2;
}

const res = sum(4, 4)
console.log(res)

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(9));

