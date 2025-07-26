export const equalCondition = ({
  userValue,
  value,
}: {
  userValue: string | number | boolean;
  value: string | number | boolean;
}): boolean => {
  return userValue === value;
};
