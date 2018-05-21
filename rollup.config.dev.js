import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

import baseConfig from './rollup.config.base';

export default {
  ...baseConfig,
  plugins: [
    serve({ contentBase: ['dist', 'demo'] }),
    livereload({ watch: ['dist', 'demo'] }),
    ...baseConfig.plugins,
  ],
};
