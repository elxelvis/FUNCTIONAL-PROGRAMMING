// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(list,bookName) {
   let newList = [...list]
  newList.push(bookName);
  return newList;
  
  // Change code above this line
}

// Change code below this line
function remove(list,bookName) {
  const book_index = list.indexOf(bookName);
  if (book_index >= 0) {
    let newList = [...list]

    newList.splice(book_index, 1);
    return newList;

    // Change code above this line
    }
}