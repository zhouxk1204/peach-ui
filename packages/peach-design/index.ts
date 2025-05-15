import '../theme/variables.css';

import { App } from "vue";
import { PButton } from "../components/button";

const components = [PButton /*, other components */];

const PeachUI = {
  install(app: App) {
    components.forEach((comp) => {
      if (comp.name) {
        app.component(comp.name, comp); // 注册每个组件
      }
    });
  },
};

export default PeachUI;
export * from "../components/button"; // 保持具名导出支持按需导入

export { updateTheme } from '../theme';
export type { ThemeConfig } from '../theme/types'