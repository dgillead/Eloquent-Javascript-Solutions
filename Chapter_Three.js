// Minimum

function min (num1, num2) {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
}

// Recursion

function isEven(num) {
  if (num === 0) {
    console.log("The number is even");
  } 
  else if (num === 1) {
    console.log("The number is odd");
  }
  else {
    if (num > 0) {
      isEven(num - 2);
    }
    else {
      isEven(num + 2);
    }
  }
}

// Bean Counting

function countBs (string) {
  var flag = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === "B") {
      flag++;
    }
  }
  return flag;
}

function countChar (string, char) {
  var flag = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      flag++;
    }
  }
  return flag;
}
