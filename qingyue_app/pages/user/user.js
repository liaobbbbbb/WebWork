Page({
  data: {
    usermes:{
      username:"username",
      td_kil:"xxx",         //今日公里数
      trip_num:"xxx",       //出行次数
      total_kil:"xxx",      //总公里数
    },
    clock_in: true,
  },
  handle_clock(){
    this.setData({
      clock_in: false,
    });
  },
  onLoad() {},
});