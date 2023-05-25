import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: { file: 'dist/index.js' },
  plugins: [
    del({ targets: 'dist' }),
    copy({
      targets: [{ src: 'src/index.html', dest: 'dist' }],
    }),
    terser(),
  ],
};
