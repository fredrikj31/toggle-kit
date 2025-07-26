import { FeatureFlag } from "../types/FeatureFlag";
import { User } from "../types/User";

export function defineFlags<
  const TUser extends User,
  const TFlags extends readonly FeatureFlag<TUser>[]
>(_user: TUser, flags: TFlags) {
  return flags;
}
