export const greaterThanCondition = ({
  value,
  expectedValue,
}: {
  value: string | number | boolean;
  expectedValue: number;
}): boolean => {
  if (typeof value === "string" || typeof value === "boolean") {
    return false;
  }

  return value > expectedValue;
};
