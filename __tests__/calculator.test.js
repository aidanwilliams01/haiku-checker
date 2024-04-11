import { haikuChecker } from "../src/haiku-checker";

describe('haikuChecker', () => {

  test('should return a boolean value', () => {
    expect(typeof haikuChecker('')).toEqual('boolean');
  });

  test('should correctly identify a three-line poem', () => {
    const poem = 'Tedious mountain\nAn amazing zebra flies\nin spite of the rat'
    expect(haikuChecker(poem)).toEqual(true);
  });

  test('should correctly count the number of vowels in a word', () => {
    haikuChecker('');
    expect(haikuChecker.syllableChecker('many')).toEqual(2);
  });

  test('should exclude silent "e"s when counting the number of vowels in a word', () => {
    haikuChecker('');
    expect(haikuChecker.syllableChecker('sure')).toEqual(1);
  });

  test('should count vowel teams as one vowel', () => {
    haikuChecker('');
    expect(haikuChecker.syllableChecker('coin')).toEqual(1);
  });

  test('should correctly count the number of syllables per line', () => {
    haikuChecker('');
    expect(haikuChecker.lineSyllableChecker('Tedious mountain')).toEqual(5);
  });
})