import { equalCondition } from "../conditions/equal/equal";
import { FeatureFlag, FlagNames, User } from "../types/types";

export const isEnabled = <
  const TUser extends User,
  const TFlags extends readonly FeatureFlag<keyof TUser & string>[]
>({
  featureName,
  flags,
  user,
}: {
  featureName: FlagNames<TFlags>;
  flags: Map<string, FeatureFlag<keyof TUser & string>>;
  user: TUser;
}): boolean => {
  const flag = flags.get(featureName);

  if (!flag) {
    console.warn(`Feature flag "${featureName}" not found.`);
    return false;
  }

  const { attribute, value, type } = flag.condition;

  if (!(attribute in user)) {
    return false;
  }

  const userValue = user[attribute];

  switch (type) {
    case "equal":
      return equalCondition({ userValue, value });
    default:
      return false;
  }
};
