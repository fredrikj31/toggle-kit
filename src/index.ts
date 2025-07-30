import { isEnabled } from "./helpers/isEnabled";
import { FeatureFlag } from "./types/FeatureFlag";
import { FlagNames } from "./types/FlagNames";
import { Property } from "./types/Property";

class FeatureFlagClient<
  const TProperty extends Property,
  const TFlags extends readonly FeatureFlag<TProperty>[],
> {
  private flags: Map<string, FeatureFlag<TProperty>>;
  private property: TProperty;

  constructor(property: TProperty, initialFlags: TFlags) {
    this.property = property;
    this.flags = new Map(
      (initialFlags as unknown as FeatureFlag<TProperty>[]).map((flag) => [
        flag.name,
        flag,
      ]),
    );
  }

  public isEnabled = (featureName: FlagNames<TFlags>): boolean =>
    isEnabled({
      featureName,
      flags: this.flags,
      property: this.property,
    });
}

export function createFeatureFlagClient<
  const TProperty extends Property,
  const TFlags extends readonly FeatureFlag<TProperty>[],
>({ property, flags }: { property: TProperty; flags: TFlags }) {
  return new FeatureFlagClient(property, flags);
}
