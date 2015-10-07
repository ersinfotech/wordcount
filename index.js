module.exports = function wordcount(content) {
  if (!content) {
    content = '';
  }
  var content = content.replace(/\r\n/g, '\n');
  var totalCount = content.length; 
  var enArray = content.match(/\b\w+\b/g) || [];
  var cnArray = content.match(/[\u4E00-\u9FA5\uF900-\uFA2D]/g) || [];

  var obj = {
    enWords: 0,
    cnWords: 0,
    totalWords: 0,
    enCharacters: 0,
    totalCharactersWithMarks: 0,
    totalCharactersWithSpace: 0,
    marks: 0,
    lines: 0,
    blanks: 0,
  }

  for (var i = 0; i < totalCount; i++) {
    var p = content.charAt(i);

    var marksReg = /[\`\~\,\.\!\@\#\$\%\^\&\*\(\)\-\_\+\=\{\}\[\]\:\;\"\'\<\>\/\?\\\\|。，、；：？！…—·ˉ¨‘’“”～々‖∶＂＇｀｜〃〔〕〈〉《》「」『』．〖〗【】（）［］｛｝]/g;
    var charReg =  /[a-zA-Z]/;

    if (marksReg.test(p)) obj.marks++;

    if (charReg.test(p)) obj.enCharacters++;

    if (/\s/ .test(p)) {
      if (p == '\n' || p == '\r') {
        obj.lines++;
      } else {
        obj.blanks++;
      }
    };
  }


  obj.enWords = enArray.length;
  obj.cnWords = cnArray.length;
  obj.totalWords = enArray.length + cnArray.length;
  obj.totalCharactersWithSpace = totalCount;
  obj.totalCharactersWithMarks = totalCount - obj.blanks - obj.lines;

  return obj;

}
