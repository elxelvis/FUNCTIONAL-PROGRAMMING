// Only change code below this line
function urlSlug(title) {

    let lowercaseTitle = title.toLowerCase()
    let splitTitle = lowercaseTitle.split(' ')
    let filterTitle = splitTitle.filter(element => element != '')
    let hyphenTitle = filterTitle.join('-')
  
    return hyphenTitle
  
  
  }
  // Only change code above this line
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");