const squareList = arr => {
    // Only change code below this line
    
    let filtered = arr.filter(number => number >= 0 && number % 1 == 0)
  
    let squared = filtered.map(number => number ** 2)
  
    return squared
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);