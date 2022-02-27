// pages/about/about.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  copy: function (e) {
    var data = ""
    var title = ""
    switch (e.currentTarget.dataset.index){
      case "0":
        data = "https://github.com/Harry-SJH"
        title = "已复制Github"

        break;
      case "1":
        data = "839507591"
        title = "已复制QQ号"
        break;
      case "2":
        data = "st839507591@gmail.com"
        title = "已复制邮箱"
        break;
    }
    wx.setClipboardData({
      data: data,
      success: function (res) {
        wx.showToast({
          title: title,
          icon: 'success',
          duration: 2000
        })
      }
    })
  }
})