import { createDefaultPreset, type JestConfigWithTsJest } from "ts-jest";

const presetConfig = createDefaultPreset({
  //...options
});

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
  rootDir: "./src",
};

export default jestConfig;
