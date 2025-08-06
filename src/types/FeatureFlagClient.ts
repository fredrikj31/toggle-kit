export type FeatureFlagClient<FlagNames> = {
  isEnabled: (featureName: FlagNames) => boolean;
};
