import { getIdentifierBucket } from "./getIdentifierBucket";

describe("getIdentifierBucket", () => {
  it("should return number between 0 and 99 for a feature & identifier", () => {
    const featureName = "admin-dashboard";
    const identifier = "HelloWorld!";
    const result = getIdentifierBucket(featureName, identifier);
    const expectedResult = 50;

    expect(typeof result).toBe("number");
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(100);
    expect(result).toBe(expectedResult);
  });

  it("should return number between 0 and 99 for another feature & same identifier", () => {
    const featureName = "another-feature";
    const identifier = "HelloWorld!";
    const result = getIdentifierBucket(featureName, identifier);
    const expectedResult = 82;

    expect(typeof result).toBe("number");
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(100);
    expect(result).toBe(expectedResult);
  });
});
