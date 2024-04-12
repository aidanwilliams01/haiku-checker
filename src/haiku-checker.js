export function haikuChecker(poem) {

  haikuChecker.syllableChecker = syllableChecker;
  haikuChecker.lineSyllableChecker = lineSyllableChecker;

  const poemArray = poem.split('\n');
  const lines = poemArray.length;
  let i = 0;
  let lineSyllables = 0;
  // const lineArray = line.split(' ');

  if (lines === 3) {
    if (lineSyllableChecker(poemArray[0]) === 5 && lineSyllableChecker(poemArray[1]) === 7 && lineSyllableChecker(poemArray[2]) === 5) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }

  function lineSyllableChecker(line) {
    const lineArray = line.split(' ');
    if (i === lineArray.length) {
      const thisLineSyllables = lineSyllables;
      lineSyllables = 0;
      i = 0;
      return thisLineSyllables;
    }
    const wordSyllables = syllableChecker(lineArray[i]);
    lineSyllables += wordSyllables;
    i += 1;
    return lineSyllableChecker(line);
  }

  function syllableChecker(word) {
    // add vowel exceptions

    word = word.toLowerCase();
    let i = 0;
    let wordArray = word.split('');

    function vowelTeamCombiner() {
      if (i === wordArray.length - 1) {
        return wordArray;
      }
      if (wordArray[i].concat(wordArray[i+1]) === 'ai' 
          || wordArray[i].concat(wordArray[i+1]) === 'ay' 
          || wordArray[i].concat(wordArray[i+1]) === 'ea'
          || wordArray[i].concat(wordArray[i+1]) === 'ey'
          || wordArray[i].concat(wordArray[i+1]) === 'ee'
          || wordArray[i].concat(wordArray[i+1]) === 'ea'
          || wordArray[i].concat(wordArray[i+1]) === 'ey'
          || wordArray[i].concat(wordArray[i+1]) === 'ei'
          || wordArray[i].concat(wordArray[i+1]) === 'ie'
          || wordArray[i].concat(wordArray[i+1]) === 'oa'
          || wordArray[i].concat(wordArray[i+1]) === 'oe'
          || wordArray[i].concat(wordArray[i+1]) === 'ue'
          || wordArray[i].concat(wordArray[i+1]) === 'eu'
          || wordArray[i].concat(wordArray[i+1]) === 'oi'
          || wordArray[i].concat(wordArray[i+1]) === 'oy'
          || wordArray[i].concat(wordArray[i+1]) === 'ou'
          || wordArray[i].concat(wordArray[i+1]) === 'au'
          || wordArray[i].concat(wordArray[i+1]) === 'oo') {
        wordArray.splice(i+1, 1);
        i += 1;
        return vowelTeamCombiner();
      }
      else {
        i += 1;
        return vowelTeamCombiner();
      }
    }

    vowelTeamCombiner();

    if (wordArray[wordArray.length - 1] === 'e') {
      const newWordArray = wordArray.slice(0, wordArray.length - 1);
      const vowels = newWordArray.filter(e => e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u' || e === 'y');
      if (vowels.length === 0) {
        return 1;
      }
      else {
        return vowels.length;
      }
    }
    else {
      const vowels = wordArray.filter(e => e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u' || e === 'y');
      return vowels.length;
    }
  }
}