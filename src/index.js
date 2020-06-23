import handler from './library/handler';
import samples from './sample-words';

String.prototype.iyelik = function (person, isPlural = false) {
    return new handler().get(this, person, isPlural);
};

export default {
    populateSamples: function () {
        samples.populate();
    },
}