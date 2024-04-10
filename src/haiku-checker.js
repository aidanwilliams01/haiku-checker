export function haikuChecker(poem) {
  haikuChecker.syllableChecker = syllableChecker;
  const lines = poem.split('\n').length;
  console.log(poem.split('\n'));
  if (lines === 3) {
    return true;
  }
  else {
    return false;
  }

  function syllableChecker(word) {
    // add vowel exceptions
    const wordArray = word.split('');
    console.log(wordArray);
    if (wordArray[wordArray.length - 1] === 'e') {
      const newWordArray = wordArray.slice(0, wordArray.length - 2)
      console.log(newWordArray);
      const vowels = newWordArray.filter(e => e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u' || e === 'y');
      return vowels.length;
    }
    else {
      const vowels = wordArray.filter(e => e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u' || e === 'y');
      return vowels.length;
    }
  }
}