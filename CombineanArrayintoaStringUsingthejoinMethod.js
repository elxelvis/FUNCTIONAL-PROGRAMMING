function sentensify(str) {
    // Only change code below this line
      let splitStr = str.split(/[^A-Za-z]/)
      let joinStr = splitStr.join(' ')
  
      return joinStr
  
    // Only change code above this line
  }
  
  sentensify("May-the-force-be-with-you");