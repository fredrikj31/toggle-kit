export type User = {
  [key: string]: string;
};

type Condition<T extends string> = {
  type: "equal";
  attribute: T;
  value: string;
};

export type FeatureFlag<T extends string> = {
  name: string;
  condition: Condition<T>;
};

export type FlagNames<T extends readonly { name: string }[]> =
  T[number]["name"];
