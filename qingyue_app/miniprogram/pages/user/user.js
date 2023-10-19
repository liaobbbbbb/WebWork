Page({
  data: {
    // 获取到的图片不显示
    user_img:'../../images/user_image/id_mes_bar/user.png',
    user_name:"登录/注册",
    user_mes:{
      td_kil:0,         //今日公里数
      trip_num:0,       //出行次数
      total_kil:0,      //总公里数
    },
    show_clock_in: false,
    clock_in: false,
    hasUserInfo:false
  },
  handle_clock(){
    ci1 = this.data.clock_in
    this.setData({
      clock_in: true,
    });
    ci2 = this.data.clock_in
    // 向数据库中传入打卡成功信息
    if(!ci1&&ci2){
      this.setData({
        show_clock_in: true
      })
    }
  },
  show_id_page(){
    console.log(this.data.user_img)
    var self = this
    if(this.data.hasUserInfo){
      my.navigateTo({
        url: 'user_page/user_page',
        success: function(res) {
          // 通过 eventChannel 向 B 页面传送数据
          res.eventChannel.emit('PageA_Data', { 
            user_img:self.data.user_img,
            user_name:self.data.user_name
          })
        }
      });
    }
    else{
      this.login()
    }
  },
  async login(){
    //配置context
    const context = await my.cloud.createCloudContext({
      env: 'env-00jx4o1n7l49' //修改为自己的环境 ID 
    });
    
    await context.init();
    my.showLoading({
      content: '加载中...',
      delay: '100',
    });

    //获取用户信息
    my.getAuthCode({
      scopes: 'auth_user',
      fail: (error) => {
        console.error('getAuthCode', error);
      },
      success: ({
        authCode
      }) => {
        // console.log(`authCode:`, authCode);
        // 调用callFunction要用context
        return context.callFunction({
          name: 'AlipayUserInfo',
          data: {
            auth_code: authCode
          },
        }).then(({
          result: userInfo
        }) => {
          my.hideLoading();
          console.log(`userInfo:`, userInfo);
          userInfo.nickName = userInfo.nick_name;
          delete userInfo.nick_name;
          this.setData({
            hasUserInfo: true,
            user_img:userInfo.avatar,
            user_name:userInfo.nickName
          });
        }).catch(error => {
          console.error('getAuthUserInfo', error);
        });
      }
    });
  },
  onLoad() {},
});
