---
id: skia
sidebar_label: Overview
title: "@remotion/skia"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {ExperimentalBadge} from '../../components/Experimental';

This package provides utilities useful for integrating [React Native Skia](https://github.com/Shopify/react-native-skia) with Remotion.

<ExperimentalBadge>
This package is currently a proof of technology.

It may change in minor version updates. Monitor this documentation page to see breaking changes when upgrading.
</ExperimentalBadge>

## Installation

Install, `@remotion/skia` as well as `@shopify/react-native-skia` and `react-native-web`.

<Tabs
defaultValue="npm"
values={[
{ label: 'npm', value: 'npm', },
{ label: 'yarn', value: 'yarn', },
{ label: 'pnpm', value: 'pnpm', },
]
}>
<TabItem value="npm">

```bash
npm i @remotion/skia @shopify/react-native-skia react-native-web
```

  </TabItem>

  <TabItem value="yarn">

```bash
yarn add @remotion/skia @shopify/react-native-skia react-native-web
```

  </TabItem>

  <TabItem value="pnpm">

```bash
pnpm i @remotion/skia @shopify/react-native-skia react-native-web
```

  </TabItem>
</Tabs>

Also update **all the other Remotion packages** to have the same version: `remotion`, `@remotion/cli` and others.

:::note
Make sure no package version number has a `^` character in front of it as it can lead to a version conflict.
:::

[Override the Webpack config](/docs/webpack) by using [`enableSkia()`](/docs/skia/enable-skia).

```ts twoslash title="remotion.config.ts"
import { Config } from "remotion";
import { enableSkia } from "@remotion/skia/enable";

Config.Bundling.overrideWebpackConfig((currentConfiguration) => {
  return enableSkia(currentConfiguration);
});
```

Next, you need to refactor entrypoint file (most commonly `src/index.tsx`) to first load the Skia WebAssembly binary before calling registerRoot():

```ts twoslash title="src/index.tsx"
// @filename: ./Video.tsx
export const RemotionVideo = () => <></>;

// @filename: index.tsx
// ---cut---
import { LoadSkia } from "@shopify/react-native-skia/src/web";
import { registerRoot } from "remotion";

(async () => {
  await LoadSkia();
  const { RemotionVideo } = await import("./Video");
  registerRoot(RemotionVideo);
})();
```

You can now start using the [`<SkiaCanvas>`](/docs/skia/skia-canvas) in your Remotion project.

## Templates

You can find the [starter template](https://github.com/remotion-dev/template-skia) here or install it using:

<Tabs
defaultValue="npm"
values={[
{ label: 'npm', value: 'npm', },
{ label: 'yarn', value: 'yarn', },
{ label: 'pnpm', value: 'pnpm', },
]
}>
<TabItem value="npm">

```bash
npx create-video --skia
```

  </TabItem>

  <TabItem value="yarn">

```bash
yarn create video --skia
```

  </TabItem>

  <TabItem value="pnpm">

```bash
pnpm create video -- --skia
```

  </TabItem>
</Tabs>

## Known issues

- A peer dependency conflict between `react-native` and `react-native-web` requires the `--force` for newer versions of npm.

## Resources

- [Example project by William Candillon](https://github.com/wcandillon/remotion-skia-tutorial)
- [Tutorial for the example project](https://www.youtube.com/watch?v=-7MOoWN2_nk)

## APIs

- [`enableSkia()`](/docs/skia/enable-skia)
- [`<SkiaCanvas />`](/docs/skia/skia-canvas)
