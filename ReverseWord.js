const readline = require('readline');

// Create interface for reading input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseWordsInSentence(sentence) {
    let reversedSentence = '';
    let word = '';
    let words = [];

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (char !== ' ') {
            word += char;
        } else {
            words.push(word);
            word = '';
        }
    }

    if (word.length > 0) {
        words.push(word);
    }

    for (let j = 0; j < words.length; j++) {
        let currentWord = words[j];
        let reversedWord = '';
        for (let k = currentWord.length - 1; k >= 0; k--) {
            reversedWord += currentWord[k];
        }
        reversedSentence += reversedWord;

        if (j !== words.length - 1) {
            reversedSentence += ' ';
        }
    }

    return reversedSentence;
}

// Ask user to input a sentence
rl.question('Enter a sentence to reverse the words: ', (inputSentence) => {
    // Get the reversed sentence
    let reversedSentence = reverseWordsInSentence(inputSentence);
    console.log(reversedSentence); // Output the reversed sentence
    rl.close(); // Close the readline interface
});
