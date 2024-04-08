export function haikuChecker(poem) {
  const length = poem.split('\n').length;
  console.log(poem.split('\n'));
  if (length === 3) {
    return true;
  }
  else {
    return false;
  }
}