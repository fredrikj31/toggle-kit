import { FeatureFlag } from "../types/FeatureFlag";
import { Property } from "../types/Property";

export function defineFlags<
  const TProperty extends Property,
  const TFlags extends readonly FeatureFlag<TProperty>[],
>(_property: TProperty, flags: TFlags) {
  return flags;
}
