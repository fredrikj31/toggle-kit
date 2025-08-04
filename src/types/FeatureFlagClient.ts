import { FeatureFlag } from "./FeatureFlag";
import { FlagNames } from "./FlagNames";

export type FeatureFlagClient<TFlags extends readonly FeatureFlag<any>[]> = {
  isEnabled: (featureName: FlagNames<TFlags>) => boolean;
};
