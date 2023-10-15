Page({
  data: {
    user_mes:{
      user_id:52286121,
      user_name:'Gargantua',
      user_sex:'男',
      user_num:'15003223901',
      user_alipay:'*宝斌',
    },
    show_change_head: false,

  },
  navigate_to_user(){
    my.navigateTo({
      url: '../user'
    });
  },
  change_head(){
    this.setData({
      show_change_head: !this.data.show_change_head
    });
  },
  onLoad() {},
});
