// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const messages = this.data.messages
    for (var i = 0; i < 18; i++) {
      messages.push({
        title: '海上生明月！天涯共此时。',
        date: i + ' September',
        image: '//inews.gtimg.com/newsapp_bt/0/5449446933/1000',
        summary: '愿一路骁勇，终有所成'
      })
    };
    this.setData({messages});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const query=wx.createSelectorQuery();
    query.select("#bottom").boundingClientRect();
    query.exec(res=>{
      // console.log(res[0].top);
      wx.pageScrollTo({
        scrollTop: res[0].top,
        number:0
      })
    })
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

  }
})