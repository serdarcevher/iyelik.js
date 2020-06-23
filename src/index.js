import utils from './library/utils';
import suffixes from './library/suffixes';
import mutationHandler from './library/consonant-mutation/handler';
import additionHandler from './library/consonant-addition/handler';
import samples from './sample-words';

String.prototype.iyelik = function (person, isPlural = false) {
    return new turkishPossessiveSuffixHandler().get(this, person, isPlural);
};

class turkishPossessiveSuffixHandler {

    constructor() {
        this.utils = new utils();
        this.suffixes = new suffixes();
        this.mutationHandler = new mutationHandler();
        this.additionHandler = new additionHandler();
    }

    get(content, person, isPlural) {
        if (isPlural) {
            content = this.pluralize(content);
        }

        return this.possess(content, person);
    }

    pluralize(content) {
        let lastVowel = this.utils.getLastVowel(content.toLocaleLowerCase('tr'));
        if ('aıou'.includes(lastVowel)) {
            return content + 'lar';
        }
        return content + 'ler';
    }

    possess (content, person) {

        this.person = person;
        this.phrase = {
            'originalContent': content 
        };

        this.phrase.intervocalicConsonant = this.additionHandler.getIntervocalicConsonant(content);
        this.phrase.content = this.phrase.originalContent + this.phrase.intervocalicConsonant;

        this.phrase.lastLetter = this.utils.getLastLetter(this.phrase.content.toLocaleLowerCase('tr'));
        this.phrase.endsWithConsonant = !this.utils.vowels.includes(this.phrase.lastLetter);
        this.phrase.isUpperCase = content == content.toLocaleUpperCase('tr');

        if (!this.phrase.intervocalicConsonant && this.phrase.endsWithConsonant) {
            this.phrase.content = this.mutationHandler.getMutatedPhrase(this.phrase.content);
        }

        //TODO: handle "saat"
        //TODO: handle "karın", "kayısı" etc.
        //TODO: handle "havuç çorbası"
        //TODO: handle "onun semizotusu"

        this.suffix = this.suffixes.get(this.person, this.phrase);

        let possesed = this.phrase.content + this.suffix;
        if (this.phrase.isUpperCase) {
            possesed = possesed.toLocaleUpperCase('tr');
        }

        return possesed;
    }
}

export default {
    populateSamples: function () {
        samples.populate();
    },
}