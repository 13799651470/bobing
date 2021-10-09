// pages/history/history.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num1:0,
        num2:0,
        num3:0,
        num4:0,
        num5:0,
        num6:0
    },
    
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.setData({
            num1:getApp().globalData.zhuangyuan_sum,
            num2:getApp().globalData.bangyan_sum,
            num3:getApp().globalData.tanhua_sum,
            num4:getApp().globalData.jinshi_sum,
            num5:getApp().globalData.juren_sum,
            num6:getApp().globalData.xiucai_sum
        })
    }
})