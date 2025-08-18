import { Condition } from "./Condition";

export type FeatureFlag<PropertyNames = {}, FlagNames = {}> = {
  name: FlagNames;
  conditions: Condition<PropertyNames>[];
};
