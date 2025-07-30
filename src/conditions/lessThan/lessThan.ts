export const lessThanCondition = ({
  userValue,
  value,
}: {
  userValue: string | number | boolean;
  value: number;
}): boolean => {
  if (typeof userValue === "string" || typeof userValue === "boolean") {
    return false;
  }

  return userValue < value;
};
