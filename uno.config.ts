import {defineConfig, presetAttributify, presetUno, presetIcons, transformerAttributifyJsx  } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      // 属性化前缀
      prefix: "u-",
      // 强制使用前缀
      prefixedOnly: true,
      // 忽略的属性
      ignoreAttributes: ["text"],
    }),
    presetIcons({
      collections: {
        stream: () =>
          import("@iconify-json/streamline-emojis/icons.json").then((i) => i.default),
      },
    }),
  ],
  transformers: [
    transformerAttributifyJsx()
  ]
});
