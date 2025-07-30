export const equalCondition = ({
  userValue,
  expectedValue,
}: {
  userValue: string | number | boolean;
  expectedValue: string | number | boolean;
}): boolean => {
  return userValue === expectedValue;
};
