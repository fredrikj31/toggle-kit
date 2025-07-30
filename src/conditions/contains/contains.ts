export const containsCondition = ({
  value,
  expectedValue,
}: {
  value: string | number | boolean;
  expectedValue: string;
}): boolean => {
  if (typeof value === "number" || typeof value === "boolean") {
    return false;
  }

  return value.includes(expectedValue);
};
