/**
 * 开发代理设置
 */
module.exports = {
  proxy: {
    "/api": {
      target: 'http://localhost:9527',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  }
}
