Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
   for (let index = 0; index < this.length; index += 1) {
        if (callback(this[index],index,this)) {
          newArray.push(this[index])
        }
      }
      
    // Only change code above this line
    return newArray;
  };