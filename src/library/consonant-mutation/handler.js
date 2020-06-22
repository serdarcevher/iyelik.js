import utils from '../utils';
import mutationExceptions from './exceptions';

class handler {

    constructor() {
        this.utils = new utils();
        
        this.strongConsonants = 'pçtk';
        this.softConsonants = 'bcdğg';
        this.exceptions = mutationExceptions;
    }

    getMutatedPhrase(phrase) {
        let lastWord = phrase; 
        if (phrase.indexOf(' ') >= 0) {
            let words = phrase.split(" ");
            lastWord = words[words.length - 1];
        }

        if (!this.exceptions.includes(lastWord.toLocaleLowerCase('tr'))) {
            let lastConsonant = this.utils.getLastConsonant(phrase);
            let consonantIndex = this.strongConsonants.indexOf(lastConsonant);
            
            if (consonantIndex > -1) {

                if (lastWord.toLocaleLowerCase('tr').slice(-2) == "nk") {
                    consonantIndex++; //use g instead of ğ for words like renk, ahenk etc.
                }

                phrase = phrase.replace(/.$/, this.softConsonants[consonantIndex]);
            }
            
            //console.log('exceptions DO NOT include ' + lastWord.toLocaleLowerCase('tr'));
        } else {
            //console.log('exceptions DO include ' + lastWord.toLocaleLowerCase('tr'));
        }

        return phrase;
    }
}

export default handler;
