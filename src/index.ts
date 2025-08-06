import { defineFlags } from "./helpers/defineFlags";
import { isEnabled } from "./helpers/isEnabled";
import { FeatureFlagClient } from "./types/FeatureFlagClient";
import { FeatureFlag } from "./types/FeatureFlag";
import { Property } from "./types/Property";
import { Condition } from "./types/Condition";

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

export {
  defineFlags,
  type FeatureFlagClient,
  type Property,
  type FeatureFlag,
  type Condition,
};
