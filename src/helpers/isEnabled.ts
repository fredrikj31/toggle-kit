import { containsCondition } from "../conditions/contains/contains";
import { endsWithCondition } from "../conditions/endsWith/endsWith";
import { equalCondition } from "../conditions/equal/equal";
import { greaterThanCondition } from "../conditions/greaterThan/greaterThan";
import { lessThanCondition } from "../conditions/lessThan/lessThan";
import { percentageCondition } from "../conditions/percentage/percentage";
import { startsWithCondition } from "../conditions/startsWith/startsWith";
import { FeatureFlag } from "../types/FeatureFlag";
import { FlagNames } from "../types/FlagNames";
import { User } from "../types/User";

export const isEnabled = <
  const TUser extends User,
  const TFlags extends readonly FeatureFlag<TUser>[],
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

  const { attribute, expectedValue, type: conditionType } = flag.condition;

  if (!(attribute in user)) {
    return false;
  }

  const value = user[attribute];

  switch (conditionType) {
    case "equal":
      return equalCondition({ value, expectedValue });
    case "contains":
      return containsCondition({ value, expectedValue });
    case "startsWith":
      return startsWithCondition({ value, expectedValue });
    case "endsWith":
      return endsWithCondition({ value, expectedValue });
    case "percentage":
      return percentageCondition({ featureName, value, expectedValue });
    case "greaterThan":
      return greaterThanCondition({ value, expectedValue });
    case "lessThan":
      return lessThanCondition({ value, expectedValue });
    default:
      conditionType satisfies never;
      return false;
  }
};
