// pages/setprize/setprize.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prize1:'',
    prize2:'',
    prize3:'',
    prize4:'',
    prize5:'',
    prize6:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  ZYinput:function(e)
    {
    this.setData({
    ZY: e.detail.value
    })
    console.log(e.detail.value)
    },
  
  setting_is_ok: function () {
    wx.showModal({
      title: '设置成功',
      showCancel: true,//是否显示取消按钮
      content: '是否需要重新设置？',
      cancelText:"重新设置",//默认是“取消”
      cancelColor:'skyblue',//取消文字的颜色
      confirmText:"返回主页",//默认是“确定”
      confirmColor: 'skyblue',//确定文字的颜色
      success: function (res) {
        if (res.cancel) {
               //点击取消,默认隐藏弹框
          } else {
               //点击确定
               wx.navigateBack({
                 delta: 0,
                })
               }
            }
         })
  }
})