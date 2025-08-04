Array.prototype.MyforEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      callback(this[i]);
    }
  }
    return this; // Returning 'this' to allow method chaining
}
const arr = [1, 2, 3, 4, 5];
console.log(arr.MyforEach(item => item));

Array.prototype.MyFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
}
console.log(arr.MyFilter(item =>  item > 2))
