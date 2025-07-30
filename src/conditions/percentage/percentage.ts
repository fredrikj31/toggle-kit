import { getIdentifierBucket } from "../../helpers/getIdentifierBucket/getIdentifierBucket";

export const percentageCondition = ({
  featureName,
  value,
  expectedValue,
}: {
  featureName: string;
  value: string | number | boolean;
  expectedValue: number;
}): boolean => {
  if (typeof value === "number" || typeof value === "boolean") {
    return false;
  }

  if (expectedValue === 0) {
    return false;
  }

  if (expectedValue === 100) {
    return true;
  }

  const valueBucket = getIdentifierBucket(featureName, value);
  return valueBucket <= expectedValue;
};
