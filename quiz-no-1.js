// Quiz number 1
function toLowerStr(str) {
    return str.toLowerCase().replace(/[\W_]/g,'')  // strip non-alphanumeric characters and convert to lower case
}
// main process
function isPalindrome (str) {
  const convertStr = toLowerStr(str)
  for(let i = 0; i < convertStr.length / 2 ; i++){
    if(convertStr[i] !== convertStr[convertStr.length - 1 - i]) {
      return false
    }
  }
  return true
}

// example
var word = 'Deleveled'
console.log( word , isPalindrome(word) )