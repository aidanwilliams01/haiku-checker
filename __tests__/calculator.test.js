import { haikuChecker } from "../src/haiku-checker";

describe('haikuChecker', () => {

  test('should return a boolean value', () => {
    expect(typeof haikuChecker('')).toEqual('boolean');
  });

  test('should correctly identify a three-line poem', () => {
    const poem = 'Tedious mountain\nAn amazing zebra flies\nin spite of the rat'
    expect(haikuChecker(poem)).toEqual(true);
  });

  test('should correctly identify the number of vowels in a word', () => {
    expect(haikuChecker('tedious').toEqual(4))
  })
})