App({
  // 小程序点击右上角关闭时，或按下设备home键离开支付宝时，小程序不会销毁，会进入后台
  // 再次打开小程序时，从后台进入前台
  // 小程序进入后台5分钟后，或占用系统资源较高，才会销毁
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  onHide(options){
    // 小程序隐藏时触发
  },
  onError(options){
    // 小程序发生js错误时触发
  },
  onShareAppMessage(options){
    // 小程序分享时调用
  },
  onUnhandledRejection(options){
    // 当 Promise 被 reject 且没有 reject 处理器时，会触发 onUnhandledRejection 事件
  },
  onPageNotFound(options){
    // 小程序要打开的页面不存在时触发 
  }
});