export const lessThanCondition = ({
  userValue,
  expectedValue,
}: {
  userValue: string | number | boolean;
  expectedValue: number;
}): boolean => {
  if (typeof userValue === "string" || typeof userValue === "boolean") {
    return false;
  }

  return userValue < expectedValue;
};
