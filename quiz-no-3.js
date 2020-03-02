// Quiz number 3
function quizNo3(str) {
    let result = permutations(str)
    return result
  }
// main process
function permutations (string) {
    if (string.length < 2) return string // if string length remains only 1 mean we finish.

    var result = []
    for (var i = 0; i < string.length; i++) {
        var char = string[i]

        if (string.indexOf(char) != i){ // if char was already used
            continue; // skip it this time
        }

        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length)
        for (var subPermutation of permutations(remainingString)) {
            result.push(char + subPermutation)
        }
    }
    return result
}

// example
var word = "ABC"
console.log(word, quizNo3(word))