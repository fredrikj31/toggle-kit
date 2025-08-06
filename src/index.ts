import { isEnabled } from "./helpers/isEnabled";
import { FeatureFlagClient } from "./types/FeatureFlagClient";
import { FeatureFlag } from "./types/FeatureFlag";
import { Property } from "./types/Property";
import { Condition } from "./types/Condition";

export function createFeatureFlagClient<FlagNames>({
  property,
  flags: initialFlags,
}: {
  property: Property;
  flags: FeatureFlag<FlagNames>[];
}): FeatureFlagClient<FlagNames> {
  const flags = new Map(initialFlags.map((flag) => [flag.name, flag]));

  const isEnabledCheck = (featureName: FlagNames): boolean =>
    isEnabled<FlagNames>({
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
