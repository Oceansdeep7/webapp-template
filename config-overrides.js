const {override, fixBabelImports, addPostcssPlugins, addBabelPlugin} = require('customize-cra');

module.exports = override(
  addBabelPlugin('@babel/plugin-proposal-optional-chaining'),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addPostcssPlugins([
    require('postcss-px-to-viewport')({
      unitToConvert: 'px',
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 5,
      propList: ['*'],   // 能转化为vw的属性列表
      viewportUnit: 'vw', // 指定需要转换成的视窗单位
      fontViewportUnit: 'vw', //字体使用的视口单位
      selectorBlackList: [], //指定不转换为视窗单位的类，可以自定义
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
      mediaQuery: false, // 允许在媒体查询中转换`px`
      replace: true,  //是否直接更换属性值，而不添加备用属性
      exclude: [/node_modules/], //忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件, 如果值是一个正则表达式，那么匹配这个正则的文件会被忽略
      landscape: false, //是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vh',  //横屏时使用的单位
      landscapeWidth: 568 //横屏时使用的视口宽度
    })
  ])
);
