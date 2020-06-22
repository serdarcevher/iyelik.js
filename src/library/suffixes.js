import utils from './utils';

class handler {

    constructor() {
        this.utils = new utils.handler();
    }

    getAllForPerson (person, endsWithConsonant) {
    
        switch (person) {
            case 'ben':
            case 'benim':
                if (endsWithConsonant) {
                    return ['ım', 'im', 'um', 'üm'];
                    break;
                }
                return ['m', 'm', 'm', 'm'];
                break;

            case 'sen':
            case 'senin':
                if (endsWithConsonant) {
                    return ['ın', 'in', 'un', 'ün'];
                    break;
                }
                return ['n', 'n', 'n', 'n'];
                break;

            case 'o':
            case 'onun':
            case 'onlar':
            case 'onların':
                if (endsWithConsonant) {
                    return ['ı', 'i', 'u', 'ü'];
                    break;
                }
                return ['sı', 'si', 'su', 'sü'];
                break;

            case 'biz':
            case 'bizim':
                if (endsWithConsonant) {
                    return ['ımız', 'imiz', 'umuz', 'ümüz'];
                    break;
                }
                return ['mız', 'miz', 'muz', 'müz'];
                break;

            case 'siz':
            case 'sizin':
                if (endsWithConsonant) {
                    return ['ınız', 'iniz', 'unuz', 'ünüz'];
                    break;
                }
                return ['nız', 'niz', 'nuz', 'nüz'];
                break;
        }
    }

    get (person, phrase) {
        let suffixes = this.getAllForPerson(person, phrase.endsWithConsonant)
        let lastVowel = this.utils.getLastVowel(phrase.content);

        let index = 0;
        switch (lastVowel.toLocaleLowerCase('tr')) {
            case 'a':
            case 'ı':
                index = 0;
                break;

            case 'e':
            case 'i':
                index = 1;
                break;

            case 'o':
            case 'u':
                index = 2;
                break;

            case 'ö':
            case 'ü':
                index = 3;
                break;

        }

        return suffixes[index];
    }

}

export default handler;