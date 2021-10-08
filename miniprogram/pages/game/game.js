var app = getApp()

Page({

  
  /**
   * 页面的初始数据
   */
  data: {
    num1:0,
    num2:0,
    num3:0,
    num4:0,
    num5:0,
    num6:0,
    one_count:0,
    two_count:0,
    three_count:0,
    four_count:0,
    five_count:0,
    six_count:0,
    image1:"../../images/one_image.png",
    image2:"../../images/one_image.png",
    image3:"../../images/one_image.png",
    image4:"../../images/one_image.png",
    image5:"../../images/one_image.png",
    image6:"../../images/one_image.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.isShow = false;
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  randomNum: function () { 
    this.setData({
      one_count:0,
      two_count:0,
      three_count:0,
      four_count:0,
      five_count:0,
      six_count:0
    })
    this.setData({
      num1: parseInt(Math.random()*6,10)+1
    })
    this.setData({
      num2: parseInt(Math.random()*6,10)+1
    })
    this.setData({
      num3: parseInt(Math.random()*6,10)+1
    })
    this.setData({
      num4: parseInt(Math.random()*6,10)+1
    })
    this.setData({
      num5: parseInt(Math.random()*6,10)+1
    })
    this.setData({
      num6: parseInt(Math.random()*6,10)+1
    })
    // console.log(parseInt(Math.random()*6,10)+1);
    if(this.data.num1==1){
      this.setData({
        image1: '../../images/one_image.png',
        one_count:this.data.one_count+1
      })
    }
    if(this.data.num1==2){
      this.setData({
        image1: '../../images/two_image.png',
        two_count:this.data.two_count+1
      })
    }
    if(this.data.num1==3){
      this.setData({
        image1: '../../images/three_image.png',
        three_count:this.data.three_count+1
      })
    }
    if(this.data.num1==4){
      this.setData({
        image1: '../../images/four_image.png',
        four_count:this.data.four_count+1
      })
    }
    if(this.data.num1==5){
      this.setData({
        image1: '../../images/five_image.png',
        five_count:this.data.five_count+1
      })
    }
    if(this.data.num1==6){
      this.setData({
        image1: '../../images/six_image.png',
        six_count:this.data.six_count+1
      })
    }

    if(this.data.num2==1){
      this.setData({
        image2: '../../images/one_image.png',
        one_count:this.data.one_count+1
      })
    }
    if(this.data.num2==2){
      this.setData({
        image2: '../../images/two_image.png',
        two_count:this.data.two_count+1
      })
    }
    if(this.data.num2==3){
      this.setData({
        image2: '../../images/three_image.png',
        three_count:this.data.three_count+1
      })
    }
    if(this.data.num2==4){
      this.setData({
        image2: '../../images/four_image.png',
        four_count:this.data.four_count+1
      })
    }
    if(this.data.num2==5){
      this.setData({
        image2: '../../images/five_image.png',
        five_count:this.data.five_count+1
      })
    }
    if(this.data.num2==6){
      this.setData({
        image2: '../../images/six_image.png',
        six_count:this.data.six_count+1
      })
    }

    if(this.data.num3==1){
      this.setData({
        image3: '../../images/one_image.png',
        one_count:this.data.one_count+1
      })
    }
    if(this.data.num3==2){
      this.setData({
        image3: '../../images/two_image.png',
        two_count:this.data.two_count+1
      })
    }
    if(this.data.num3==3){
      this.setData({
        image3: '../../images/three_image.png',
        three_count:this.data.three_count+1
      })
    }
    if(this.data.num3==4){
      this.setData({
        image3: '../../images/four_image.png',
        four_count:this.data.four_count+1
      })
    }
    if(this.data.num3==5){
      this.setData({
        image3: '../../images/five_image.png',
        five_count:this.data.five_count+1
      })
    }
    if(this.data.num3==6){
      this.setData({
        image3: '../../images/six_image.png',
        six_count:this.data.six_count+1
      })
    }

    if(this.data.num4==1){
      this.setData({
        image4: '../../images/one_image.png',
        one_count:this.data.one_count+1
      })
    }
    if(this.data.num4==2){
      this.setData({
        image4: '../../images/two_image.png',
        two_count:this.data.two_count+1
      })
    }
    if(this.data.num4==3){
      this.setData({
        image4: '../../images/three_image.png',
        three_count:this.data.three_count+1
      })
    }
    if(this.data.num4==4){
      this.setData({
        image4: '../../images/four_image.png',
        four_count:this.data.four_count+1
      })
    }
    if(this.data.num4==5){
      this.setData({
        image4: '../../images/five_image.png',
        five_count:this.data.five_count+1
      })
    }
    if(this.data.num4==6){
      this.setData({
        image4: '../../images/six_image.png',
        six_count:this.data.six_count+1
      })
    }

    if(this.data.num5==1){
      this.setData({
        image5: '../../images/one_image.png',
        one_count:this.data.one_count+1
      })
    }
    if(this.data.num5==2){
      this.setData({
        image5: '../../images/two_image.png',
        two_count:this.data.two_count+1
      })
    }
    if(this.data.num5==3){
      this.setData({
        image5: '../../images/three_image.png',
        three_count:this.data.three_count+1
      })
    }
    if(this.data.num5==4){
      this.setData({
        image5: '../../images/four_image.png',
        four_count:this.data.four_count+1
      })
    }
    if(this.data.num5==5){
      this.setData({
        image5: '../../images/five_image.png',
        five_count:this.data.five_count+1
      })
    }
    if(this.data.num5==6){
      this.setData({
        image5: '../../images/six_image.png',
        six_count:this.data.six_count+1
      })
    }

    if(this.data.num6==1){
      this.setData({
        image6: '../../images/one_image.png',
        one_count:this.data.one_count+1
      })
    }
    if(this.data.num6==2){
      this.setData({
        image6: '../../images/two_image.png',
        two_count:this.data.two_count+1
      })
    }
    if(this.data.num6==3){
      this.setData({
        image6: '../../images/three_image.png',
        three_count:this.data.three_count+1
      })
    }
    if(this.data.num6==4){
      this.setData({
        image6: '../../images/four_image.png',
        four_count:this.data.four_count+1
      })
    }
    if(this.data.num6==5){
      this.setData({
        image6: '../../images/five_image.png',
        five_count:this.data.five_count+1
      })
    }
    if(this.data.num6==6){
      this.setData({
        image6: '../../images/six_image.png',
        six_count:this.data.six_count+1
      })
    }
  },
  check: function () {
    if(this.data.four_count==1)
      wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得秀才——一秀',

        })
    else if(this.data.four_count==2)
      wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得举人——二举',
        
      })
    else if(this.data.two_count==4)
      wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得进士——四进',
        
      })
    else if(this.data.four_count==3)
      wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得探花——三红',
        
      })
    else if(this.data.one_count==1&&this.data.two_count==1&&this.data.three_count==1&&this.data.four_count==1&&this.data.five_count==1&&this.data.six_count==1)
      wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得榜眼——对堂',
        
      })
    else if(this.data.four_count==4){
      if(this.data.one_count==2)
        wx.showModal({
          title: '您的结果是',
          content: '恭喜你获得状元——金花',
          
        })
      else
        wx.showModal({
          title: '您的结果是',
          content: '恭喜你获得状元——四点红',
          
        })
    }
    else if(this.data.four_count==6)
      wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得状元——六杯红',
        
      })
    else if(this.data.one_count==6)
      wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得状元——遍地锦',
        
      })
    else if(this.data.six_count==6)
      wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得状元——六杯黑',
        
      })
    else if(this.data.four_count==5)
      wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得状元——五红',
        
      })
    else if(this.data.five_count==5)
      wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得状元——五子登科',
        
      })
    else
      wx.showModal({
        title: '您的结果是',
        content: '很抱歉，您没有获得奖品',
        
      })
  }
}
)