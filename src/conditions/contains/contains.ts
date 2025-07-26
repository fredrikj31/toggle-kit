export const containsCondition = ({
  userValue,
  value,
}: {
  userValue: string | number | boolean;
  value: string;
}): boolean => {
  if (typeof userValue === "number" || typeof userValue === "boolean") {
    return false;
  }

  return userValue.includes(value);
};
