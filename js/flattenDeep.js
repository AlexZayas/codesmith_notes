const flattenDeep = function (arr) {
  let res = []; // Initialize an empty array
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flattenDeep(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

// res = [0, 1].concat(flattenDeep([2, 3, [4, 5, [6]]]));
// res = [2, 3].concat(flattenDeep([4, 5, [6]]));
// res = [4, 5].concat(flattenDeep([6]));
// res = [6];

console.log(flattenDeep([0, 1, [2, 3, [4, 5, [6]]]]));
