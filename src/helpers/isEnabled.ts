import { containsCondition } from "../conditions/contains/contains";
import { equalCondition } from "../conditions/equal/equal";
import { FeatureFlag } from "../types/FeatureFlag";
import { FlagNames } from "../types/FlagNames";
import { User } from "../types/User";

export const isEnabled = <
  const TUser extends User,
  const TFlags extends readonly FeatureFlag<TUser>[]
>({
  featureName,
  flags,
  user,
}: {
  featureName: FlagNames<TFlags>;
  flags: Map<string, FeatureFlag<TUser>>;
  user: TUser;
}): boolean => {
  const flag = flags.get(featureName);

  if (!flag) {
    console.warn(`Feature flag "${featureName}" not found.`);
    return false;
  }

  const { attribute, value, type: conditionType } = flag.condition;

  if (!(attribute in user)) {
    return false;
  }

  const userValue = user[attribute];

  switch (conditionType) {
    case "equal":
      return equalCondition({ userValue, value });
    case "contains":
      return containsCondition({ userValue, value });
    default:
      conditionType satisfies never;
      return false;
  }
};
