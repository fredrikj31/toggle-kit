export type Property<PropertyNames extends string> = Record<
  PropertyNames,
  string | number | boolean
>;
