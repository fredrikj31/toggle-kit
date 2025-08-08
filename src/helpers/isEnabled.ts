import { containsCondition } from "../conditions/contains/contains";
import { endsWithCondition } from "../conditions/endsWith/endsWith";
import { equalCondition } from "../conditions/equal/equal";
import { greaterThanCondition } from "../conditions/greaterThan/greaterThan";
import { lessThanCondition } from "../conditions/lessThan/lessThan";
import { percentageCondition } from "../conditions/percentage/percentage";
import { regexCondition } from "../conditions/regex/regex";
import { startsWithCondition } from "../conditions/startsWith/startsWith";
import { FeatureFlag } from "../types/FeatureFlag";
import { Property } from "../types/Property";

export const isEnabled = <PropertyNames extends string, FlagNames>({
  featureName,
  flags,
  property,
}: {
  featureName: FlagNames;
  flags: Map<FlagNames, FeatureFlag<PropertyNames, FlagNames>>;
  property: Property<PropertyNames>;
}): boolean => {
  const flag = flags.get(featureName);

  if (!flag) {
    console.warn(`Feature flag "${featureName}" not found.`);
    return false;
  }

  const { attribute, expectedValue, type: conditionType } = flag.condition;

  if (!(attribute in property)) {
    return false;
  }

  const value = property[attribute];

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
      return percentageCondition<FlagNames>({
        featureName,
        value,
        expectedValue,
      });
    case "greaterThan":
      return greaterThanCondition({ value, expectedValue });
    case "lessThan":
      return lessThanCondition({ value, expectedValue });
    case "regex":
      return regexCondition({ value, expectedValue });
    default:
      conditionType satisfies never;
      return false;
  }
};
