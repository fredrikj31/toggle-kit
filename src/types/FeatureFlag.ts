import { Condition } from "./Condition";

export type FeatureFlag<FlagNames> = {
  name: FlagNames;
  condition: Condition;
};
