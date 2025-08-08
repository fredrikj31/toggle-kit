export type Condition<PropertyNames> =
  // String Attribute
  | {
      type: "equal" | "contains" | "startsWith" | "endsWith";
      attribute: PropertyNames;
      expectedValue: string;
    }
  // Number Attribute
  | {
      type: "equal" | "greaterThan" | "lessThan";
      attribute: PropertyNames;
      expectedValue: number;
    }
  // Boolean Attribute
  | {
      type: "equal";
      attribute: PropertyNames;
      expectedValue: boolean;
    }
  // Percentage Attribute
  | {
      type: "percentage";
      attribute: PropertyNames;
      expectedValue: number;
    }
  // Regex Attribute
  | {
      type: "regex";
      attribute: PropertyNames;
      expectedValue: RegExp;
    };
