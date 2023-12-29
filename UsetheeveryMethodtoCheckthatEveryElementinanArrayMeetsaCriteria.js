function checkPositive(arr) {
    // Only change code below this line
  
    let check = arr.every(number => number >= 0)
  
    return check
  
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);