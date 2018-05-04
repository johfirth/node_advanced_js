var hiddenWord = [];

function Letter(hiddenLetter, guess, word){
  this.value = hiddenLetter;
  this.guessed = false;
}

Letter.prototype = {
  displayValue: function() {
    return this.guessed ? this.value : '_'
  },
  doesCharMatch: function(char) {
    const match = this.value === char;
    
    if (match) {
      this.guessed = true;
    }

    return match;
  }
}


module.exports = Letter