Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    for (let index = 0; index < this.length; index += 1) {
      newArray.push(callback(this[index],index,this))
    }
    // Only change code above this line
    return newArray;
  };