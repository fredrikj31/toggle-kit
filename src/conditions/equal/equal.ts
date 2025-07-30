export const equalCondition = ({
  value,
  expectedValue,
}: {
  value: string | number | boolean;
  expectedValue: string | number | boolean;
}): boolean => {
  return value === expectedValue;
};
