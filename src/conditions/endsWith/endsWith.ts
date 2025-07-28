export const endsWithCondition = ({
  userValue,
  value,
}: {
  userValue: string | number | boolean;
  value: string;
}): boolean => {
  if (typeof userValue === "number" || typeof userValue === "boolean") {
    return false;
  }

  const regex = RegExp(`${value}$`, "gm");

  return regex.test(userValue);
};
