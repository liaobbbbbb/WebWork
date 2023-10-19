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
    show_change_name: false,
    show_change_sex: false,
    show_change_num: false,
    change_name_foucs: true,
    new_name:"",
    change_name_bar_active:''
  },
  navigate_to_user(){
    my.navigateBack()
  },
  change_head(){
    this.setData({
      show_change_head: !this.data.show_change_head
    });
  },
  change_sex(){
    this.setData({
      show_change_sex: !this.data.show_change_sex
    });
  },
  change_name(e){
    this.setData({
      show_change_name: !this.data.show_change_name
    })
  },
  change_name_input_on(){
    this.setData({
      change_name_bar_active: 'change_name_bar_active'
    })
  },
  change_name_input_off(){
    this.setData({
      change_name_bar_active: ''
    })
  },
  change_name_bind(e){
    this.setData({
      new_name: e.detail.value
    })
  },
  handle_change_name(){
    console.log(this.data.new_name)
    // 对新名字进行合规检查

    // 将新的名字改入数据库
  },
  chnage_sex_male(){
    this.setData({
      'user_mes.user_sex': '男',
       show_change_sex: !this.data.show_change_sex
    })
    // 修改数据库
  },
  change_sex_female(){
    this.setData({
      'user_mes.user_sex': '女',
      show_change_sex: !this.data.show_change_sex
    })
    // 修改数据库
  },
  change_num(){
    this.setData({
      show_change_num: !this.data.show_change_num
    })
  },
  onLoad() {},
  onKeyboardHeight(){
    // 键盘高度变化时触发
  }
});
