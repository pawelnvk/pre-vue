import { uglify } from 'rollup-plugin-uglify';

import baseConfig from './rollup.config.base';

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    uglify(),
  ],
};
