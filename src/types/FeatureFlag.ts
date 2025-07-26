import { Condition } from "./Condition";
import { User } from "./User";

export type FeatureFlag<TUser extends User> = {
  name: string;
  condition: Condition<TUser>;
};
