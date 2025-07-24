import { isEnabled } from "./helpers/isEnabled";
import { FeatureFlag, FlagNames, User } from "./types/types";

class FeatureFlagClient<
  const TUser extends User,
  const TFlags extends readonly FeatureFlag<keyof TUser & string>[]
> {
  private flags: Map<string, FeatureFlag<keyof TUser & string>>;
  private user: TUser;

  constructor(user: TUser, initialFlags: TFlags) {
    this.user = user;
    this.flags = new Map(
      (initialFlags as unknown as FeatureFlag<keyof TUser & string>[]).map(
        (flag) => [flag.name, flag]
      )
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
  const TFlags extends readonly FeatureFlag<keyof TUser & string>[]
>({ user, flags }: { user: TUser; flags: TFlags }) {
  return new FeatureFlagClient(user, flags);
}
