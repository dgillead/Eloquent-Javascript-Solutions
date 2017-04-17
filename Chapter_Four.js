// The Sum of a Range
// Not 100% complete yet. Need to come back to this.

function range(start, end, step) {
  var arr = [];
  if (step === undefined) {
    while (start <= end) {
      arr.push(start);
      start++;
    }
  }
  else {
    // loop ends one element too early
    while (start != end) {
      arr.push(start);
      start += step;
    }
  }
  return arr;
}

function sum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Reversing an Array

function reverseArray(array) {
  var newArr = [];
  var arrayLength = array.length - 1;
  for (var i = 0; i < array.length; i++) {
    newArr[i] = array[arrayLength - i];
  }
  return newArr;
}

function reverseArrayInPlace(array) {
  var temp = "";
  var arrayLength = array.length - 1;
  for (var i = 0; i < array.length / 2; i++) {
    temp = array[i];
    array[i] = array[arrayLength - i];
    array[arrayLength - i] = temp;
  }
  return array;
}
