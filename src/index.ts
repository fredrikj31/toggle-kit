import { isEnabled } from "./helpers/isEnabled";
import { FeatureFlagClient } from "./types/FeatureFlagClient";
import { FeatureFlag } from "./types/FeatureFlag";
import { Property } from "./types/Property";
import { Condition } from "./types/Condition";

export function createFeatureFlagClient<
  PropertyNames extends string,
  FlagNames,
>({
  property,
  flags: initialFlags,
}: {
  property: Property<PropertyNames>;
  flags: FeatureFlag<PropertyNames, FlagNames>[];
}): FeatureFlagClient<FlagNames> {
  const flags = new Map(initialFlags.map((flag) => [flag.name, flag]));

  const isEnabledCheck = (featureName: FlagNames): boolean =>
    isEnabled<PropertyNames, FlagNames>({
      featureName,
      flags,
      property,
    });

  return {
    isEnabled: isEnabledCheck,
  };
}

export {
  type FeatureFlagClient,
  type Property,
  type FeatureFlag,
  type Condition,
};
