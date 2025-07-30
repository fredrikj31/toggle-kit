import { User } from "./User";

type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

export type Condition<TUser extends User> =
  // String Attribute
  | {
      type: "equal" | "contains" | "startsWith" | "endsWith";
      attribute: KeysMatching<TUser, string>;
      value: string;
    }
  // Number Attribute
  | {
      type: "equal" | "percentage" | "greaterThan";
      attribute: KeysMatching<TUser, number>;
      value: number;
    }
  // Boolean Attribute
  | {
      type: "equal";
      attribute: KeysMatching<TUser, boolean>;
      value: boolean;
    };
