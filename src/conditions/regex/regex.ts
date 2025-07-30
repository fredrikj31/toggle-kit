export const regexCondition = ({
  value,
  expectedValue,
}: {
  value: string | number | boolean;
  expectedValue: RegExp;
}): boolean => {
  if (typeof value === "number" || typeof value === "boolean") {
    return false;
  }

  return expectedValue.test(value);
};
