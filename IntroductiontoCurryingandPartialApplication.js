function add(x) {
    // Only change code below this line
  
    let curried = y => z => x + y + z
  
    return curried
  
  
    // Only change code above this line
  }
  
  add(10)(20)(30);