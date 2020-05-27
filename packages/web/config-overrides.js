const {override, fixBabelImports, addLessLoader, useBabelRc} = require('customize-cra');
const theme = require('@app/common/theme').default;

module.exports = override(
  useBabelRc(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {'@primary-color': theme.brand_primary},
  }),
);
