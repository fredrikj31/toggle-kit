import { isEnabled } from "./helpers/isEnabled";
import { FeatureFlag } from "./types/FeatureFlag";
import { FlagNames } from "./types/FlagNames";
import { User } from "./types/User";

class FeatureFlagClient<
  const TUser extends User,
  const TFlags extends readonly FeatureFlag<TUser>[]
> {
  private flags: Map<string, FeatureFlag<TUser>>;
  private user: TUser;

  constructor(user: TUser, initialFlags: TFlags) {
    this.user = user;
    this.flags = new Map(
      (initialFlags as unknown as FeatureFlag<TUser>[]).map((flag) => [
        flag.name,
        flag,
      ])
    );
  }

  public isEnabled = (featureName: FlagNames<TFlags>): boolean =>
    isEnabled({
      featureName,
      flags: this.flags,
      user: this.user,
    });
}

export function createFeatureFlagClient<
  const TUser extends User,
  const TFlags extends readonly FeatureFlag<TUser>[]
>({ user, flags }: { user: TUser; flags: TFlags }) {
  return new FeatureFlagClient(user, flags);
}
