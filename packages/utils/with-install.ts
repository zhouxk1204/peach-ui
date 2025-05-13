import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin & {
  [key: string]: any
}

export const withInstall = <T>(main: T, extra?: Record<string, any>): SFCWithInstall<T> => {
  (main as SFCWithInstall<T>).install = (app: App): void => {
    const name = (main as any).name
    if (name) {
      app.component(name, main as any)
    }
    if (extra) {
      for (const comp of Object.values(extra)) {
        if (comp?.name) {
          app.component(comp.name, comp)
        }
      }
    }
  }
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp
    }
  }
  return main as SFCWithInstall<T>
}

export const withNoopInstall = <T>(comp: T): SFCWithInstall<T> => {
  ;(comp as any).install = () => {}
  return comp as SFCWithInstall<T>
}
