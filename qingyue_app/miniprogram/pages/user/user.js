Page({
  data: {
    user_mes:{
      user_name:"Gargantua",
      td_kil:"xxx",         //今日公里数
      trip_num:"xxx",       //出行次数
      total_kil:"xxx",      //总公里数
    },
    show_clock_in: false,
    clock_in: false,
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
    my.navigateTo({
      url: 'user_page/user_page'
    });
  },
  onLoad() {},
});
