import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export function withInstall<T>(component: T) {
  const c = component as SFCWithInstall<T>
  c.install = (app: App) => {
    app.component((c as any).name, c)
  }
  return c
}