let a=10
console.log(a)


// Global Object = the object that holds all global variables and functions for an environment.

// In Browser:
// - The global object is "window" (or "self" in web workers).
// - Example: window.alert(), window.setTimeout().
// - Provides DOM and browser APIs (not part of V8).

// In Node.js (Server):
// - The global object is "global".
// - Example: global.setTimeout(), global.Buffer.
// - Provides Node-specific APIs (file system, modules).

// Is it part of V8?
// - No. V8 only handles JavaScript language features (like Array, Object, Math).
// - Browser APIs (DOM, window) are provided by the browser (Chrome’s Blink).
// - Node.js APIs (global, require, fs) are provided by Node.js (built on top of V8).





console.log(global);
// Prints the global object in Node.js (contains all global variables, timers, etc.).
// In browsers, the global object is `window`, not `global`.

console.log(this);
// In Node.js (top-level), `this` is an empty object (`{}`), not `global`.
// In browsers, `this` at the top level refers to `window`.

console.log(this === global); 
// false in Node.js (because `this` is `{}` at the top level, not `global`).
// true in browsers (top-level `this` is `window`, which is the global object).

// globalThis:
// A standard object introduced in ES2020 to access the global object in any environment.

console.log(globalThis === global);
// true in Node.js (both point to the same global object).

console.log(globalThis === window);
// false in Node.js (no `window` exists in Node).
// true in browsers (because `window` is the global object).

console.log(globalThis);
// Prints the global object (works in both Node.js and browsers).
