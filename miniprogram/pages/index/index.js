Page({

  /**
   * 页面的初始数据
   */
  data: {
    first_background_image : "/image/First_bg.jpg"
  },



  click1 : function () {
    wx.navigateTo({
      url: '../game/game',
    })
  },

  click2 : function () {
    wx.navigateTo({
      url: '../demo1/demo1',
    })
  },

  click3 : function () {
    wx.navigateTo({
      url: '../rules/rules',
    })
  },

  click4 : function () {
    wx.navigateTo({
      url: '../setprize/setprize',
    })
  }


})