import { haikuChecker } from "../src/haiku-checker";

describe('haikuChecker', () => {

  test('should return a boolean value', () => {
    expect(typeof haikuChecker('')).toEqual('boolean');
  });

  test('should correctly identify a three-line poem', () => {
    const poem = 'Tedious mountain\nAn amazing zebra flies\nin spite of the rat'
    // const checkHaiku = haikuChecker(poem);
    // haikuChecker(poem);
    expect(haikuChecker(poem)).toEqual(true);
  });

  test('should correctly count the number of vowels in a word', () => {
    haikuChecker('');
    expect(haikuChecker.syllableChecker('tedious')).toEqual(4);
  });
})