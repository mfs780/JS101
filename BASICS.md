# JavaScript Basics

## Types

### Base Types
```javascript
// Strings
"This is a String";
'This is also a String'; // [Preferred]
`Wow another String!`;

// Numbers
1 2 -1 0.1

// Boolean
true false
```

### Container Types
```javascript
// Arrays
['Fahad', 32, true]

// Access Array
let arr = ['Fahad', 32, true];

arr[0];
>>> 'Fahad'
arr[2];
>>> true
arr[3]; arr[-1];
>>> undefined

// Objects
{
  name: 'Fahad',
  age: 32,
  isMale: true
}


// Access Object
let person = {
  name: 'Fahad',
  age: 32,
  isMale: true
};

person.name;
>>> 'Fahad';
person['name'];
>>> 'Fahad';
person.isMale;
>>> true;
```

## Variables Console.log, Prompt
```javascript
// Use let to store any value type for later retrieval
let name = 'Fahad';
let age = 32;

name + ' Sheikh';
>>> 'Fahad Sheikh';
age + 8;
>>> 40
```

[Console.log](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
```javascript
// Use Console.log to print to console
console.log(name);
>>> 'Fahad'
console.log(age);
>>> 32
console.log(name,age);
>>> 'Fahad', 32
```
[Prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
```javascript
// Use Prompt to obtain string input from user
let name = prompt('What is your name?'); // Without default value
let age = prompt('What is your age?', 32); // With default value
```

## Common Methods for Types

### String Methods
```javascript
// Strings
let s = 'This is a String';
```

[Length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
```javascript
// Get Length of String
s.length;
>>> 18
```

[CharAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
```javascript
// Access character at specific index
s[0]; s.charAt(0);
>>> 'T'
s[10]; s.charAt(10);
>>> 'S'
s[18]; s.charAt(18);
>>> undefined
```

[IndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
```javascript
// Find index of first appearence of character
s.indexOf('T');
>>> 0
s.indexOf('i');
>>> 2
s.indexOf('F');
>>> -1
```

[Substring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
```javascript
// Get Substring
s.substring(5,6);
>>> 'is';
s.substring(11);
>>> 'String';
```

[toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
```javascript
// Change string to uppercase
s.toUpperCase();
>>> 'THIS IS A STRING';
```

[toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
```javascript
// Change string to uppercase
s.toLowerCase();
>>> 'this is a string';
```

[Split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
```javascript
// Split String into Array by specified character
s.split(' ');
>>> ['This', 'is', 'a', 'String'];
s.split('is');
>>> ['This ', ' a String'];
s.split('');
>>> ['T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 'S', 't', 'r', 'i', 'n', 'g'];
```

### Array Methods
```javascript
// Arrays
let arr = ['Fahad', 32, true];
```

```javascript
// Access element at specific index
arr[0];
>>> 'Fahad'
s[2];
>>> true
s[3]; s.[-1];
>>> undefined
```

[Length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
```javascript
// Get Length of an Array
arr.length;
>>> 3
```

[IndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
```javascript
// Find index of first appearence of element
arr.indexOf('Fahad');
>>> 0
arr.indexOf(true);
>>> 2
arr.indexOf(false);
>>> -1
```

[Push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
```javascript
// Add element to end of array
arr.push('Pakistani');
>>> ['Fahad', 32, true, 'Pakistani']
```

[Pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
```javascript
// Remove element from end of array
arr.pop();
>>> 'Pakistani'
```

[Unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
```javascript
// Add element to start of array
arr.unshift('Saad');
>>> ['Saad', 'Fahad', 32, true]
```

[shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
```javascript
// Remove element from start of array
arr.unshift();
>>> 'Saad'
```

[join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
```javascript
// Join array elements into a string and separate with specified string or commas be default
arr.join();
>>> 'Fahad,32,true'
arr.join('');
>>> 'Fahad32true'
arr.join(' | ');
>>> 'Fahad | 32 | true'
```

## String Concatonation

```javascript
// String concatonation
let name = 'Fahad';
let age = 32;

// Using +
name + ' is ' + age + ' years old';
>>> 'Fahad is 32 years old';

// Using ` (tick) instead of ' (single quote) [Preferred]
`${name} is ${age} years old`;
>>> 'Fahad is 32 years old';
```

## Numerical Operations

```javascript
// Addition
1 + 3
>>> 4

// Subtraction
1 - 3
>>> -2

// Multiplication
1 * 3
>>> 3

// Division
1 / 3
>>> 0.3333333333

// Modulo (Remainder)
1 % 3
>>> 3
5 % 3
>>> 2
```

## Conditionals
```javascript
let name = 'Fahad';
let age = 32;

// Comparison === (Compares type and value) [Preferred]
name === 'Fahad';
>>> true
age === 32;
>>> true
age === '32';
>>> false

// Comparison == (Compares value by transforming both into a comparable type)
age == 32;
>>> true
age === '32';
>>> true

// >, <, >=, <=
age > 32;
>>> false
age >= 32;
>>> true
age < 32;
>>> false
age <= 32;
>>> true

// || (OR combine conditionals)
age > 50 || name === 'Fahad';
>>> true
age > 50 || name === 'Saad';
>>> false

// && (AND combine conditionals)
age > 30 && name === 'Fahad';
>>> true
age > 50 && name === 'Fahad';
>>> true

// ! Negation
name !== 'Saad';
>>> true
age !== 32;
>>> false
!(age > 50 || name === 'Saad');
>>> true;
```

## Control Flows

### If Statement
```javascript
// If Statement
if (32 > 30) {
  console.log(true);
}
>>> true;

// If - Else Statement
if (32 < 30) {
  console.log(true);
} else {
  console.log(false);
}
>>> false;

// If - Else If Statement
if (32 < 30) {
  console.log('Less than 30');
} else if (32 < 40) {
  console.log('Less than 40');
}
>>> 'Less than 40';

// If - Else If - Else Statement
if (32 < 20) {
  console.log('Less than 20');
} else if (32 < 30) {
  console.log('Less than 30');
} else {
  console.log('Less than 100');
}
>>> 'Less than 100';
```

### While Loop
```javascript
// While Loop
let i = 0;

while (i < 5) {
  console.log(i);
  i = i + 1;
}
>>> 0
>>> 1
>>> 2
>>> 3
>>> 4


// While Loop iterating over array
let arr = ['Fahad', 32, true];
let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i = i + 1;
}
>>> 'Fahad'
>>> 32
>>> true
```

### For Loop
```javascript
// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
>>> 0
>>> 1
>>> 2
>>> 3
>>> 4

// For Loop iterating over array
let arr = ['Fahad', 32, true];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
>>> 'Fahad'
>>> 32
>>> true
```
