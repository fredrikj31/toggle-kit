import { regexCondition } from "./regex";

describe("Condition - Regex", () => {
  it("should return true if value is matching expectedValue", () => {
    const value = "test@example.com";
    const expectedValue = /.+\@example.com/;

    const result = regexCondition({
      value,
      expectedValue,
    });
    const expectedResult = true;

    expect(result).toBe(expectedResult);
  });

  it("should return false if value is not matching expectedValue", () => {
    const value = "test@example.com";
    const expectedValue = /.+\@mail.com/;

    const result = regexCondition({
      value,
      expectedValue,
    });
    const expectedResult = false;

    expect(result).toBe(expectedResult);
  });
});
