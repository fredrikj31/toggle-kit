import { isEnabled } from "./helpers/isEnabled";
import { FeatureFlag } from "./types/FeatureFlag";
import { FlagNames } from "./types/FlagNames";
import { Property } from "./types/Property";

export type FeatureFlagClient<TFlags extends readonly FeatureFlag<any>[]> = {
  isEnabled: (featureName: FlagNames<TFlags>) => boolean;
};

export function createFeatureFlagClient<
  const TProperty extends Property,
  const TFlags extends readonly FeatureFlag<TProperty>[],
>({ property, flags: initialFlags }: { property: TProperty; flags: TFlags }) {
  // Create a Map for efficient flag lookup by name.
  const flags = new Map(
    (initialFlags as unknown as FeatureFlag<TProperty>[]).map((flag) => [
      flag.name,
      flag,
    ]),
  );

  const isEnabledCheck = (featureName: FlagNames<TFlags>): boolean =>
    isEnabled({
      featureName,
      flags,
      property,
    });

  return {
    isEnabled: isEnabledCheck,
  };
}
