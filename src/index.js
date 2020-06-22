import utils from './library/utils';
import suffixes from './library/suffixes';
import mutationHandler from './library/consonant-mutation/handler';
import samples from './sample-words';

String.prototype.iyelik = function (person) {
    return new turkishPossessiveSuffixHandler().getPossessedVersion(person, this);
};

class turkishPossessiveSuffixHandler {

    constructor() {
        this.utils = new utils();
        this.suffixes = new suffixes();
        this.mutationHandler = new mutationHandler();
    }

    getPossessedVersion (person, content) {
        if (content == "su")// the only exception...
            content+= "y"

        if (content == "hak") { // oh, another exception!..
            content+= "k";
        }

        this.person = person;

        this.phrase = {};
        this.phrase.content = content;
        this.phrase.lastLetter = this.utils.getLastLetter(this.phrase.content.toLocaleLowerCase('tr'));
        this.phrase.endsWithConsonant = !this.utils.vowels.includes(this.phrase.lastLetter);

        if (this.phrase.endsWithConsonant) {
            this.phrase.content = this.mutationHandler.getMutatedPhrase(this.phrase.content);
        }

        //TODO: handle "karın", "kayısı" etc.
        //TODO: handle "havuç çorbası"
        //TODO: handle "onun semizotusu"

        this.suffix = this.suffixes.get(this.person, this.phrase);

        return this.phrase.content + this.suffix;
    }
}

export default {
    populateSamples: function () {
        samples.populate();
    },
}