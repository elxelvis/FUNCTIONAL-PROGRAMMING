const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line

let sortedArray = [].concat(arr).sort((a,b) => a - b)

return sortedArray

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));