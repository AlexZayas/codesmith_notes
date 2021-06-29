const clone = (value) => {
  if (Array.isArray(value)) return [...value];
  if (typeof value === "object") {
    const copy = {};
    for (const key in value) {
      copy[key] = value[key];
    }
    return copy;
  }
};

let users = [{ user: "barney" }, { user: "fred" }];
const shallowClone = clone(users);

console.log(shallowClone === users);
console.log(shallowClone[0] === users[0]);

const deepClone = (value) => {
  const copy = new value.constructor(); // Get the constructor function
  for (const key in value) {
    if (typeof value[key] === "object") {
      // If the value is an object...
      copy[key] = deepClone(value[key]);
    } else {
      copy[key] = value[key];
    }
  }
  return copy;
};

const deepCloneVal = deepClone(users);
console.log(deepCloneVal === users);
console.log(deepCloneVal[0] === users[0]);
console.log(deepCloneVal[0].user === users[0].user);
