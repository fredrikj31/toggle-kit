export const containsCondition = ({
  userValue,
  expectedValue,
}: {
  userValue: string | number | boolean;
  expectedValue: string;
}): boolean => {
  if (typeof userValue === "number" || typeof userValue === "boolean") {
    return false;
  }

  return userValue.includes(expectedValue);
};
