const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@primary-color': '#1f2324',
      '@secondary-color': '#fff',
      '@heading-color': '#3f3d3a',
      '@text-color': '#000',
      '@text-color-secondary' : '#3f3d3a'
    },
  }),
);
