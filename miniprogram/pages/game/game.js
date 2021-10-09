var app = getApp();

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
    image6:"../../images/one_image.png",
    t:0
  },

 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.isShow = false;
  },

/**
   * 随机数生成以及点数图片替换函数
   */

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

/**
   * 结果检测函数
   */

  check: function () {
    if(this.data.four_count==1){
    getApp().globalData.xiucai_sum = getApp().globalData.xiucai_sum + 1;
    wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得秀才——一秀',
        })
    }
      
    else if(this.data.four_count==2){
    getApp().globalData.juren_sum = getApp().globalData.juren_sum + 1;
    wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得举人——二举',
        
      })
    }
      
    else if(this.data.two_count==4){
    getApp().globalData.jinshi_sum = getApp().globalData.jinshi_sum + 1;
    wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得进士——四进',
        
      })
    }
      
    else if(this.data.four_count==3){
    getApp().globalData.tanhua_sum = getApp().globalData.tanhua_sum + 1;
    wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得探花——三红',
        
      })
    }
      
    else if(this.data.one_count==1&&this.data.two_count==1&&this.data.three_count==1&&this.data.four_count==1&&this.data.five_count==1&&this.data.six_count==1){
    getApp().globalData.bangyan_sum = getApp().globalData.bangyan_sum + 1;
    wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得榜眼——对堂',
        
      })
    }
      
    else if(this.data.four_count==4){
      if(this.data.one_count==2){
        getApp().globalData.zhuangyuan_sum = getApp().globalData.zhuangyuan_sum + 1;
        wx.showModal({
          title: '您的结果是',
          content: '恭喜你获得状元——金花',
          
            })
        }
        
      else{
        getApp().globalData.zhuangyuan_sum = getApp().globalData.zhuangyuan_sum + 1;
        wx.showModal({
          title: '您的结果是',
          content: '恭喜你获得状元——四点红',
          
            })
        }
        
    }

    else if(this.data.four_count==6){
    getApp().globalData.zhuangyuan_sum = getApp().globalData.zhuangyuan_sum + 1;
    wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得状元——六杯红',
        
      })    
    }
      
    else if(this.data.one_count==6){
    getApp().globalData.zhuangyuan_sum = getApp().globalData.zhuangyuan_sum + 1;
    wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得状元——遍地锦',
        
      })
    }
      
    else if(this.data.six_count==6){
    getApp().globalData.zhuangyuan_sum = getApp().globalData.zhuangyuan_sum + 1;
    wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得状元——六杯黑',
        
      })
    }
      
    else if(this.data.four_count==5){
    getApp().globalData.zhuangyuan_sum = getApp().globalData.zhuangyuan_sum + 1;
    wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得状元——五红',
        
      })
    }
      
    else if(this.data.five_count==5){
    getApp().globalData.zhuangyuan_sum = getApp().globalData.zhuangyuan_sum + 1;
    wx.showModal({
        title: '您的结果是',
        content: '恭喜你获得状元——五子登科',
        
      })
    }
      
    else
      wx.showModal({
        title: '您的结果是',
        content: '很抱歉，您没有获得奖品',
        
      })
  }
}
)