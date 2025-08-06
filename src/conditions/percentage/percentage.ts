import { getIdentifierBucket } from "../../helpers/getIdentifierBucket/getIdentifierBucket";

export const percentageCondition = <FlagNames>({
  featureName,
  value,
  expectedValue,
}: {
  featureName: FlagNames;
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

  const valueBucket = getIdentifierBucket({ featureName, identifier: value });
  return valueBucket <= expectedValue;
};
