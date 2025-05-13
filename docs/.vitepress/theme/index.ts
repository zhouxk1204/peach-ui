import DefaultTheme from 'vitepress/theme'
import { PButton } from '../../../packages/components'
import type { Theme } from 'vitepress'
import { App } from 'vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('PButton', PButton)
  },
} satisfies Theme