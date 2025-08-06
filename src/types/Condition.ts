export type Condition =
  // String Attribute
  | {
      type: "equal" | "contains" | "startsWith" | "endsWith";
      attribute: string;
      expectedValue: string;
    }
  // Number Attribute
  | {
      type: "equal" | "greaterThan" | "lessThan";
      attribute: string;
      expectedValue: number;
    }
  // Boolean Attribute
  | {
      type: "equal";
      attribute: string;
      expectedValue: boolean;
    }
  // Percentage Attribute
  | {
      type: "percentage";
      attribute: string;
      expectedValue: number;
    }
  // Regex Attribute
  | {
      type: "regex";
      attribute: string;
      expectedValue: RegExp;
    };
