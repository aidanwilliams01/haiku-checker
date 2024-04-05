import { haikuChecker } from "../src/haiku-checker";

describe('haikuChecker', () => {

  test('should return a boolean value', () => {
    expect(typeof haikuChecker()).toEqual('boolean');
  });
})