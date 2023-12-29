function checkPositive(arr) {
    // Only change code below this line
  
    let check = arr.some(number => number >= 0)
  
    return check
  
  
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));