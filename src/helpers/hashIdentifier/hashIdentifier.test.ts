import { hashIdentifier } from "./hashIdentifier";

describe("hashIdentifier", () => {
  it('should return correct hashed value from "HelloWorld!" string', () => {
    const string = "HelloWorld!";
    const result = hashIdentifier(string);
    const expectedResult = 5380218252885080;

    expect(typeof result).toBe("number");
    expect(result).toBe(expectedResult);
  });

  it('should return correct hashed value from "LoremIpsum" string', () => {
    const string = "LoremIpsum";
    const result = hashIdentifier(string);
    const expectedResult = 163965136996770;

    expect(typeof result).toBe("number");
    expect(result).toBe(expectedResult);
  });
});
