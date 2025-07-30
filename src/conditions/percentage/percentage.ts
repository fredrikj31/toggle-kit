import { getIdentifierBucket } from "../../helpers/getIdentifierBucket/getIdentifierBucket";

export const percentageCondition = ({
  featureName,
  userValue,
  expectedValue,
}: {
  featureName: string;
  userValue: string | number | boolean;
  expectedValue: number;
}): boolean => {
  if (typeof userValue === "number" || typeof userValue === "boolean") {
    return false;
  }

  if (expectedValue === 0) {
    return false;
  }

  if (expectedValue === 100) {
    return true;
  }

  const userValueBucket = getIdentifierBucket(featureName, userValue);
  return userValueBucket <= expectedValue;
};
