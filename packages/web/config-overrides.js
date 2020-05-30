const {
  override,
  fixBabelImports,
  addLessLoader,
  useBabelRc: babelRC,
  addWebpackResolve,
} = require('customize-cra');
const theme = require('@app/common/theme').default;
const path = require('path');

module.exports = override(
  addWebpackResolve({
    alias: {
      react: path.resolve(__dirname, '../../', 'node_modules', 'react'),
      'react-redux': path.resolve(__dirname, '../../', 'node_modules', 'react-redux'),
    },
  }),
  babelRC(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': theme.brand_primary },
  }),
);
