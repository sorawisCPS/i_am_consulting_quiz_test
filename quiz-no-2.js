// Quiz number 2
// sort alphabets
function sortAlphabets (text) {
    return text.split('').sort().join('')
}
// main process
function quizNo2 (words) {
    words = words.split(',')
    // The output object
    var anagrams = {}

    for (var i in words) {
        var word = words[i].replace(/\s/g, '')
        // sort the word
        var sorted = sortAlphabets(word)
        // if key already exist, push word
        if (anagrams[sorted] != null) {
            anagrams[sorted].push(word)
        }else{
            // create new key and push new word
            anagrams[sorted] = [word]
        }
    }
    var countNo2 = 1
    var output = ""
    // Output result
    for (var word in anagrams) {
        let words = anagrams[word]
        let seperate = " - "
        let result = ""
        for (let n in words) {
            result += words[n] + seperate
        }
        output += countNo2+". " + result.slice(0, -3)+"\n"
        countNo2++
    }
    return output
}

// example
var words = "VMRCO, VORCM, MCRTOX, ZXTAC, XZATC, XMTCOR, OXVS, AZTXC, VXOS, RZAT, MRCOTX, SVXO, TRAZ, ZTAR, MVOCR"
console.log(words, quizNo2(words))
