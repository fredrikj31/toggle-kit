export const startsWithCondition = ({
  userValue,
  expectedValue,
}: {
  userValue: string | number | boolean;
  expectedValue: string;
}): boolean => {
  if (typeof userValue === "number" || typeof userValue === "boolean") {
    return false;
  }

  const regex = RegExp(`^${expectedValue}`, "gm");

  return regex.test(userValue);
};
