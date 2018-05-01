var hiddenWord = [];

function Letter(hiddenLetter, guess, word){
  this.hiddenLetter = hiddenLetter;
  this.guess = guess;
  this.word = word.split('')
}

Letter.prototype = {
  printLetter: function(){
    this.word.forEach(element => {
      hiddenWord.push('_')
      
    });
    console.log(hiddenWord)
    }
  }





var word1 = new Letter('a', 'b', 'duck')
word1.printLetter();

console.log(word1.word)