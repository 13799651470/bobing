Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },



  onClick1 : function () {
      wx.navigateTo({
          url: '../game/game'
      })
  },

  onClick2 : function () {
      wx.navigateTo({
          url: '../demo1/demo1'
      })
  },

  onClick3 : function () {
      wx.navigateTo({
          url: '../rules/rules'
      })
  },

  onClick4 : function () {
      wx.navigateTo({
          url: '../setprize/setprize'
      })
  }

})