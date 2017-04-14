// Looping a Triangle
var string = "#";
for (var i = 0; i < 7; i++) {
  console.log(string);
  string += "#";
}

// FizzBuzz
for (var i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else {
  console.log(i);
  }
}

// Chess Board
var string = "";
var size = 8;
var counter = 0;
var lineCounter = 1;
for (var i = 0; i < size; i++) {
  for (var k = 0; k < size; k++) {
    if (counter === 8) {
      string += "\n";
      counter = 0;
      lineCounter++;
      if (lineCounter % 2 === 0) {
        string += " ";
      }
    }
    if (k % 2 === 0) {
      string += "#";
      counter++;
    }
    else {
      string += " ";
      counter++;
    }
  }
}
console.log(string);
