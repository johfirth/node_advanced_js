const letter = require ('./letter.js')


function Word(word) {
  this.letters = word.split('').map(char => new Letter(char))
};

Word.prototype = {
  getDisplay: function() {
    return this.letters.map(letter => letter.displayValue())
  },
  handleGuess: function(char) {
    this.letters.forEach(letter => letter.doesCharMatch(char))
  }
}

module.exports = Word;