const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter'
      })
      config.plugin('CompressionPlugin').use(
        new CompressionPlugin({
          test: /\.js$|\.html$\.css/,
          threshold: 10240,
          deleteOriginalAssets: false
        })
      )
    })
    // 添加 isProd 用来判断是否在标题添加 dev-
    config.plugin('html').tap(args => {
      args[0].isProd = true
      return args
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')
      // 添加判断isProd用来判断是否在标题添加 dev-
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  }
}
