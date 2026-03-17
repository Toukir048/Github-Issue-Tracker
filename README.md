## 1️⃣ Difference between `var`, `let`, and `const`

- **`var`**: Function or global scoped. Can be redeclared and updated.  
- **`let`**: Block scoped. Can be updated but cannot be redeclared in same block.  
- **`const`**: Block scoped. Cannot be updated or redeclared. Must assign value at declaration.

**Example:**

```js
var x = 10;
let y = 20;
const z = 30;

x = 15; // OK
y = 25; // OK
// z = 35; // ❌ Error
````

---

## 2️⃣ Spread Operator (`...`)

The spread operator expands arrays or objects into individual elements.

**Example:**

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3
```

---

## 3️⃣ Difference between `map()`, `filter()`, and `forEach()`

* **`map()`** → Returns a new array by transforming each element.
* **`filter()`** → Returns a new array with only elements that meet a condition.
* **`forEach()`** → Runs a function on each element but does **not** return anything.

**Example:**

```js
const nums = [1, 2, 3, 4];

const doubled = nums.map(n => n * 2);      // [2, 4, 6, 8]
const even = nums.filter(n => n % 2 === 0); // [2, 4]

nums.forEach(n => console.log(n)); // Logs 1, 2, 3, 4
```

---

## 4️⃣ Arrow Function

A shorter way to write functions using `=>`.

**Example:**

```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Without arrow function
function addOld(a, b) {
  return a + b;
}
```

---

## 5️⃣ Template Literals

Strings using backticks `` ` `` that allow variables and multi-line text.

**Example:**

```js
const name = "John";
const greeting = `Hello, ${name}!`; 
console.log(greeting); // Hello, John!

const multiLine = `
Line 1
Line 2
`;
console.log(multiLine);
```



