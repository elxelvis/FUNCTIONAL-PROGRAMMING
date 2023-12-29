function alphabeticalOrder(arr) {
    // Only change code below this line
  
    let sorted = arr.sort((a,b) => a == b ? 0 : a > b ? 1 : -1)
  
    return sorted
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);