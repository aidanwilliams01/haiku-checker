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
    const vowels = wordArray.filter(e => e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u' || e === 'y');
    return vowels.length;
  }
}