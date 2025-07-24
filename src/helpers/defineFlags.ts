import { FeatureFlag, User } from "../types/types";

export function defineFlags<const TUser extends User>(
  _user: TUser,
  flags: readonly FeatureFlag<keyof TUser & string>[]
) {
  return flags;
}
