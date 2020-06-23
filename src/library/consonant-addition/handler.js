import wordsAndLetters from './words-and-letters';

class additionHandler {

    constructor() {
        this.wordsAndLetters = wordsAndLetters;
    }

    getIntervocalicConsonant(phrase) {
        let lowerCasePhrase = phrase.toLocaleLowerCase('tr');
        let upperCasePhrase = phrase.toLocaleUpperCase('tr');
        let intervocalicConsonant = '';

        if (lowerCasePhrase in this.wordsAndLetters) {
            intervocalicConsonant = this.wordsAndLetters[lowerCasePhrase];
            
            if (phrase == upperCasePhrase) {
                intervocalicConsonant = intervocalicConsonant.toLocaleUpperCase('tr');
            }
        }

        return intervocalicConsonant;
    }
}

export default additionHandler;
