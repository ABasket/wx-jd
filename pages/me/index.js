// pages/me/index.js
// 获取应用实例
const app = getApp();
// console.log(app);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    hasUserInfo:false,
    canIUse: wx.canIUse("button.open-type.contact")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo:true
      })
    } else if(this.data.canIUse) {
      app.userInfoReadyCallback = res =>{
        this.setData({
          userInfo:res.userInfo,
          hasUserInfo:true
        })
      }
    }
  },
  getUserInfo:function(e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo:true
    })
  }
})