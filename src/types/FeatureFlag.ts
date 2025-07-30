import { Condition } from "./Condition";
import { Property } from "./Property";

export type FeatureFlag<TProperty extends Property> = {
  name: string;
  condition: Condition<TProperty>;
};
