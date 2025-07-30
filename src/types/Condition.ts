import { Property } from "./Property";

type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

export type Condition<TProperty extends Property> =
  // String Attribute
  | {
      type: "equal" | "contains" | "startsWith" | "endsWith";
      attribute: KeysMatching<TProperty, string>;
      expectedValue: string;
    }
  // Number Attribute
  | {
      type: "equal" | "greaterThan" | "lessThan";
      attribute: KeysMatching<TProperty, number>;
      expectedValue: number;
    }
  // Boolean Attribute
  | {
      type: "equal";
      attribute: KeysMatching<TProperty, boolean>;
      expectedValue: boolean;
    }
  // Percentage Attribute
  | {
      type: "percentage";
      attribute: KeysMatching<TProperty, string>;
      expectedValue: number;
    }
  // Regex Attribute
  | {
      type: "regex";
      attribute: KeysMatching<TProperty, string>;
      expectedValue: RegExp;
    };
