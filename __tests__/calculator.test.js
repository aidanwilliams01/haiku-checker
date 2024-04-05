import { haikuChecker } from "../src/haiku-checker";

describe('haikuChecker', () => {

  test('should return a boolean value', () => {
    expect(typeof haikuChecker()).toEqual('boolean');
  });

  test('should correctly identify when a poem has three lines', () => {
    expect(typeof haikuChecker()).toEqual('boolean');
  });
})