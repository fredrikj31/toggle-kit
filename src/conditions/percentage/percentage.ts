import { getIdentifierBucket } from "../../helpers/getIdentifierBucket/getIdentifierBucket";

export const percentageCondition = ({
  featureName,
  userValue,
  value,
}: {
  featureName: string;
  userValue: string | number | boolean;
  value: number;
}): boolean => {
  if (typeof userValue === "number" || typeof userValue === "boolean") {
    return false;
  }

  if (value === 0) {
    return false;
  }

  if (value === 100) {
    return true;
  }

  const userValueBucket = getIdentifierBucket(featureName, userValue);
  return userValueBucket <= value;
};
