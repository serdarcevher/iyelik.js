class utils {
    constructor() {
        this.vowels = 'aeıioöuü';
    }
    
    getLastLetter(phrase) {
        return phrase.charAt(phrase.length - 1);
    }

    getLastConsonant(phrase) {
        let i = 1;
        let lastConsonant = this.getLastLetter(phrase).toLocaleLowerCase('tr');

        while (this.vowels.includes(lastConsonant)) {

            lastConsonant = phrase.charAt(phrase.length - i);
            i++;
            if (i > phrase.length+1) {
                break;
            }
        }

        return lastConsonant;
    }

    getLastVowel(phrase) {
        let i = 1;
        let lastVowel = this.getLastLetter(phrase).toLocaleLowerCase('tr');

        while (!this.vowels.includes(lastVowel)) {

            lastVowel = phrase.charAt(phrase.length - i);
            i++;
            if (i > phrase.length+1) {
                break;
            }
        }

        return lastVowel;
    }

    getLastWord(phrase) {
        let lastWord = phrase; 
        if (phrase.indexOf(' ') >= 0) {
            let words = phrase.split(" ");
            lastWord = words[words.length - 1];
        }
        return lastWord;
    }
}

export default utils;