 // Quiz number 4
 function quizNo4(number) {
    let result = sumPower(number)
    return result
  }

// main process
function sumPower(number) {
    let total = 0
    for(let i = 1; i <= number; i++) {
        total += power(i)
    }
    return total
}

// do power input number
const power = (number) => {
    let result = Math.pow(number,number)
    return parseInt(result)
}

// example
var number = 3
console.log(number, quizNo4(number))