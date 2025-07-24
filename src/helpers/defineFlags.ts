import { FeatureFlag, User } from "../types/types";

export function defineFlags<
  const TUser extends User,
  const TFlags extends readonly FeatureFlag<keyof TUser & string>[]
>(_user: TUser, flags: TFlags) {
  return flags;
}
