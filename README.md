# iyelik.js
An helper tool to add possessive suffixes to improper nouns in Turkish.

> :raising_hand: The genitive case suffix (ilgi eki) and the possessive suffix (iyelik eki) are two different concepts in Turkish language. If you're looking to handle genitives (such as "Serdar'**ın** kalemi" or "Tayfun'**un** evi", have a look at https://github.com/tayfunerbilen/js-iyelik-eki (despite the fact that the repo is misnamed).

This tool handles posssessive suffixes such as "kalem**im**" or "ev**iniz**".
See it working below:

![See it working](https://github.com/sahtepetrucci/iyelik.js/raw/master/demonstrate.gif "See it working")

## Installation
```shell script
npm install iyelik
# or
yarn add iyelik
```

## Usage
```js
const iyelik = require('iyelik')

let word = 'kalem';
word.iyelik('benim') # => 'kalemim'

word = 'ev';
word.iyelik('sizin') # => 'eviniz'
word.iyelik('sizin', true) # => 'evleriniz'
```

## Usage in browser
```html
<script type="text/javascript" src="dist/bundle.js"></script>
<script>
   let word = 'kalem';
   console.log(word.iyelik('benim')); //"kalemim"
  
   word = 'ev';
   console.log(word.iyelik('sizin')); //"eviniz"
   console.log(word.iyelik('sizin', true)); //"evleriniz"
</script>
```

## Demo
1) Clone or download the repo
2) Open index.html in your browser and write anything in the text input

## Notes

This project is still in its early stages.
The code attempts to apply consonant softening as well as adding possessive suffixes to the phrases, but

- mutation exceptions list is missing (probably lots of) words,
- some phrases are already known to be not handled properly (such as "havuç çorbası", "semizotu", "karın") thus the algorithm requires more tinkering.

## TODO
- handling edge cases
- writing unit tests

If you would like to contribute feel free to submit a pull request.

