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
        this.setData({
            num1:getApp().globalData.zhuangyuan_sum,
            num2:getApp().globalData.bangyan_sum,
            num3:getApp().globalData.tanhua_sum,
            num4:getApp().globalData.jinshi_sum,
            num5:getApp().globalData.juren_sum,
            num6:getApp().globalData.xiucai_sum
        })
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
        // this.setData({
        //     num1:
        // })
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

    }
})