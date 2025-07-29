// In Node.js, each file is treated as a separate module.
// To use code (functions, variables) from one file in another, we use:
// 1. module.exports (to share code)  //module.exports is a empty object {} by default so you can add like module.exports.calculatesum=calculatesum;
// 2. require (to import code)
 
// Example: Exporting a function (math.js)
function add(a, b) {
    return a + b;
}
module.exports = add;  // Exports the 'add' function

// Example: Importing in another file (app.js)
const add = require('./math');  // './' means local file
console.log(add(5, 3));  // Output: 8

// You can also export multiple things:
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// Importing multiple:
const math = require('./math');
console.log(math.add(2, 3));      // 5
console.log(math.subtract(5, 2)); // 3

// Why use this?
// - Helps organize code into smaller, reusable files.
// - Keeps code modular and easy to maintain.




//you can export both a variable and a function together in Node.js :


// file: utils.js
// A variable
const appName = "MyNodeApp";

// A function
function greet(name) {
    return `Hello, ${name}!`;
}

// Export both
module.exports = {
    appName,   // same as appName: appName
    greet
};

// file: app.js
const utils = require('./utils');

console.log(utils.appName);           // Output: MyNodeApp
console.log(utils.greet('Rahul'));    // Output: Hello, Rahul!



//  //exporting a variable and function, then importing with destructuring
// // utils.js (Module file)
// const appName = "MyNodeApp";

// function greet(name) {
//     return `Hello, ${name}!`;
// }

// // Export both as an object
// module.exports = { appName, greet };


// // app.js (Main file)
// const { appName, greet } = require('./utils');  // Import with destructuring

// console.log(appName);         // Output: MyNodeApp
// console.log(greet('Rahul'));  // Output: Hello, Rahul!






// CommonJS Modules (CJS):
// - Default module system in Node.js (before ES Modules).
// - Uses `module.exports` to export and `require()` to import.
// - File extension: usually `.js` (Node treats it as CJS by default).

// Example (math.cjs or math.js):
module.exports = {
    add: (a, b) => a + b
};

// Import:
const { add } = require('./math');
console.log(add(2, 3));


// ES Modules (ESM):
// - Modern JavaScript module system (standardized).
// - Uses `export` to export and `import` to import.
// - File extension: `.mjs` (or `.js` if "type": "module" is in package.json).

// Example (math.mjs):
export const add = (a, b) => a + b;

// Import:
import { add } from './math.mjs';
console.log(add(2, 3));
 



// CommonJS Modules (CJS):
// - Uses `module.exports` and `require()`.
// - Default module system in Node.js.
// - Older way (before ES Modules).
// - Synchronous (blocks execution when loading modules).
// - Runs in non-strict mode by default (unless you enable 'use strict').

// ES Modules (ESM):
// - Uses `import` and `export`.
// - Default in modern frameworks like React, Angular.
// - Newer, standardized (ES6 Modules).
// - Asynchronous (can load modules without blocking).
// - Always uses strict mode by default.




// By default, Node.js treats `.js` files as CommonJS (CJS).
// If you want to use ES Modules (import/export) with `.js` files, 
// you must tell Node to treat them as ES Modules.

// How? Add this in package.json:
// {
//   "type": "module"
// }

// Without this:
// - Node expects CJS syntax (require/module.exports).
// - Using `import` will throw an error (Unexpected token).

// Alternatives:
// - Use `.mjs` extension for files (Node auto-detects ES Module).
// - Or set `"type": "module"` in package.json so `.js` works as ES Module.

// Why needed?
// - Node.js supports both module systems (CJS and ESM).
// - It needs a clear signal to know which syntax you’re using in `.js` files.





