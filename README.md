# wordcount

## Install

```shell
npm i --save @ersinfotech/wordcount
```

## Usage

```js
var wordcount = require('@ersinfotech/wordcount');
var result = wordcount('中英混合 counting is a difficult issue.');
// { 
//   enWords: 5,
//   cnWords: 4,
//   totalWords: 9,
//   enCharacters: 25,
//   totalCharactersWithMarks: 30,
//   totalCharactersWithSpace: 35,
//   marks: 1,
//   lines: 0,
//   blanks: 5 
// }
```

## License

MIT