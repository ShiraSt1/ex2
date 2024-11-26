const express = require("express")
const { letters }  = require('./gim.js')

const app = express()

PORT = process.env.PORT || 4500

app.get('/gimatria/:word', (req, res) => {
    const word = req.params.word
    const arrLetters = word.split('')
    console.log(`word: ${word}wordArr: ${arrLetters} lettersArr: ${letters[0].letter}, ${letters[0].num},  ${letters[1].letter}, ${letters[1].num},  ${letters[2].letter}, ${letters[2].num}`)
    let sum = 0;
    let found;
    arrLetters.forEach((letterA) => {
            found = letters.find((letterB) => {
            console.log(`letterFound: ${found}`)
            return letterB.letter == letterA
        })
        if (found) {
            sum += found.num
            console.log(`sum i :${sum}`)
        }
    })
    console.log(`summ:${sum}`)
    res.json(sum)
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})