export type FlagNames<T extends readonly { name: string }[]> =
  T[number]["name"];
