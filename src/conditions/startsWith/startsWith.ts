export const startsWithCondition = ({
  value,
  expectedValue,
}: {
  value: string | number | boolean;
  expectedValue: string;
}): boolean => {
  if (typeof value === "number" || typeof value === "boolean") {
    return false;
  }

  const regex = RegExp(`^${expectedValue}`, "gm");

  return regex.test(value);
};
