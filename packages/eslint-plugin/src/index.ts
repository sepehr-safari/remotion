import deterministicRandomness from "./rules/deterministic-randomness";
import evenDimensions from "./rules/even-dimensions";
import nomp4Import from "./rules/no-mp4-import";
import noStringAssets from "./rules/no-string-assets";
import warnNativeMediaTag from "./rules/warn-native-media-tag";
import durationInFrames from "./rules/no-duration-frames-infinity";
import volumeCallback from "./rules/volume-callback";

const rules = {
  "no-mp4-import": nomp4Import,
  "warn-native-media-tag": warnNativeMediaTag,
  "deterministic-randomness": deterministicRandomness,
  "no-string-assets": noStringAssets,
  "even-dimensions": evenDimensions,
  "duration-in-frames": durationInFrames,
  "volume-callback": volumeCallback,
};

export = {
  rules,
  configs: {
    recommended: {
      rules: {
        "@remotion/no-mp4-import": "off",
        "@remotion/warn-native-media-tag": "error",
        "@remotion/deterministic-randomness": "error",
        "@remotion/no-string-assets": "error",
        "@remotion/even-dimensions": "error",
        "@remotion/duration-in-frames": "error",
        "@remotion/volume-callback": "error",
      },
    },
  },
};
