import { hashIdentifier } from "../hashIdentifier/hashIdentifier";

/**
 * Calculates a identifier's "bucket" (0-99) for a given feature flag.
 * @param featureName The name of the feature flag.
 * @param identifier A stable identifier.
 * @returns A number between 0 and 99.
 */
export function getIdentifierBucket(
  featureName: string,
  identifier: string,
): number {
  if (!identifier) {
    return -1;
  }
  // We combine the feature name and user ID to ensure the user gets a
  // different "roll" for each feature.
  const featureIdentifier = `${featureName}-${identifier}`;
  const hash = hashIdentifier(featureIdentifier);
  return Math.abs(hash % 100);
}
