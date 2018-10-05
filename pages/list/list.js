const fetch=require('../../utils/fetch.js')
// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1,
    page:0,
    limit:10,
    list:[],
    more:true,
    isloading:false,
    searchShowed:false,
    searchText:''
  },
  loadMore(){
    if(this.data.more&&!this.data.isloading){
      this.data.isloading=true;   //开启节流阀，防止加载的时候多次拖拽导致多次加载
      const params = { _page: ++this.data.page, _limit: this.data.limit };
      if(this.data.searchText){params.q=this.data.searchText}
      return fetch(`categories/${this.data.id}/shops`, params)
      .then(res => {
        // console.log(res.data);
        this.setData({
          list: this.data.list.concat(res.data),    // concat深拷贝
          more: res.data.length >= this.data.limit
        });
        this.data.isloading =false;
        })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id;
    fetch(`categories/${options.id}`).then(res=>{
      wx.setNavigationBarTitle({ title: res.data.name});
    })
    // console.log(options);
    this.loadMore();
    
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
    this.data.page=0;
    this.data.list=[];
    this.data.more=true;
    this.loadMore().then(() => { wx.stopPullDownRefresh();})
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  showSearchHandle(){
    this.setData({
      searchShowed: true
    })
  },
  searchChangeHandle(e){
    this.setData({
      searchText: e.detail.value
    })
  },
  searchHandle(){
    this.data.page = 0;
    this.data.list = [];
    this.data.more = true;
    this.loadMore();

  },
  clearSearchHandle(){
    this.setData({
      searchText:""
    })
  },
  hideSearchHandle(){
    this.setData({
      searchShowed: false,
      searchText:""
    })
  }
})