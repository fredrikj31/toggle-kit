import { Condition } from "./Condition";

export type FeatureFlag<PropertyNames = {}, FlagNames = {}> = {
  name: FlagNames;
  condition: Condition<PropertyNames>;
};
