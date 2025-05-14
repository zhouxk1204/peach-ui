import './src/style.css'

import { SFCWithInstall, withInstall } from '../../utils/with-install'

import Button from './src/Button.vue';

export const PButton: SFCWithInstall<typeof Button> = withInstall(Button)

export default PButton
