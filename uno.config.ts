import { presetKobalte } from 'unocss-preset-primitives'
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    // default options {prefix: 'ui'}
    presetKobalte(/* options */),
  ],
})