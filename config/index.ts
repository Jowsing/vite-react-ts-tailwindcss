import { ConfigEnv, UserConfig, UserConfigExport } from 'vite';

import commonConfig from './common';
import devConfig from './mode/dev';
import prodConfig from './mode/prod';

const config: UserConfigExport = (config: ConfigEnv) => {
  let userConfig: UserConfig;

  if (config.mode === 'prod') {
    userConfig = { ...commonConfig, ...prodConfig };
  } else {
    userConfig = { ...commonConfig, ...devConfig };
  }

  return userConfig;
}


export default config;
