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

  let isEnabled: boolean = false;
  for (const condition of flag.conditions) {
    if (isEnabled) return true; // Return fast

    const { attribute, expectedValue, type: conditionType } = condition;

    if (!(attribute in property)) {
      return false;
    }

    const value = property[attribute];

    switch (conditionType) {
      case "equal":
        isEnabled = equalCondition({ value, expectedValue });
        continue;
      case "contains":
        isEnabled = containsCondition({ value, expectedValue });
        continue;
      case "startsWith":
        isEnabled = startsWithCondition({ value, expectedValue });
        continue;
      case "endsWith":
        isEnabled = endsWithCondition({ value, expectedValue });
        continue;
      case "percentage":
        isEnabled = percentageCondition<FlagNames>({
          featureName,
          value,
          expectedValue,
        });
        continue;
      case "greaterThan":
        isEnabled = greaterThanCondition({ value, expectedValue });
        continue;
      case "lessThan":
        isEnabled = lessThanCondition({ value, expectedValue });
        continue;
      case "regex":
        isEnabled = regexCondition({ value, expectedValue });
        continue;
      default:
        conditionType satisfies never;
        return false;
    }
  }

  return isEnabled;
};
