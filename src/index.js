import utils from './library/utils';
import suffixes from './library/suffixes';
import samples from './sample-words';

String.prototype.iyelik = function (person) {
    return new turkishPossessiveSuffixHandler().getPossessedVersion(person, this);
};

class turkishPossessiveSuffixHandler {

    constructor() {
        this.utils = new utils.handler();
        this.suffixes = new suffixes();
    }

    getPossessedVersion (person, content) {
        if (content == "su")// the only exception...
            content+= "y"

        this.person = person;

        this.phrase = {};
        this.phrase.content = content;
        this.phrase.lastLetter = this.utils.getLastLetter(this.phrase.content.toLocaleLowerCase('tr'));
        this.phrase.endsWithConsonant = !this.utils.vowels.includes(this.phrase.lastLetter);

        if (this.phrase.endsWithConsonant) {
            //this.phrase.content = this.getMutatedPhrase(this.phrase.content);
        }


        this.suffix = this.suffixes.get(this.person, this.phrase);

        return this.phrase.content + this.suffix;
    }
}

export default {
    populateSamples: function () {
        samples.populate();
    },
}