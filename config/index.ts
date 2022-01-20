import { ConfigEnv, UserConfig, UserConfigExport } from 'vite';

import commonConfig from './common';
import devConfig from './mode/dev';
import prodConfig from './mode/prod';

const config: UserConfigExport = (config: ConfigEnv) => {
  const modeConfig = {
    prod: prodConfig,
    dev: devConfig,
  }[config.mode] ?? devConfig;

  const userConfig: UserConfig = { ...commonConfig, ...modeConfig };

  return userConfig;
}


export default config;
