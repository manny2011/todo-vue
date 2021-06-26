module.exports = {
  devServer: {
    proxy: {//有一个代理服务器在中间存在，其实并不太理解这点！
      '/myapi': {//拦截的关键词
        // 代理的目标服务器地址
        //http://10.136.192.192:8082/myapi ---(pathRewrite)---> http://10.136.192.192:8082
        target: 'http://10.136.192.192:8082',
        pathRewrite: { '^/myapi': '' },
        // 设置https
        secure: false,
        // 必须设置该项
        changeOrigin: true
      }
    }
  }
}