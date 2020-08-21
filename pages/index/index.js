// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannersList:[],
    recommendMusicLists:[],
    topLists:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /****轮播图数据****/ 
    wx.request({
      url: 'http://localhost:3000/banner',
      data:{
        type:1
      },
      success:({data})=>{
        // console.log(data)
        this.setData({
          bannersList:data.banners
        })
      }
    })

    /*****每日推荐歌单*****/ 
    wx.request({
      url: 'http://localhost:3000/personalized',
      data:{
        limit:30
      },
      success:({data})=>{
        // console.log(data.result)
        this.setData({
          recommendMusicLists:data.result
        }) 
      }
    })

    /********排行榜*******/
    let arr = [0,1,2,3]
    let index=0
    let newArr = []
    while(index<arr.length){
      wx.request({
        url: 'http://localhost:3000/top/list',
        data:{
          idx:arr[index++]
        },
        success:({data})=>{
          console.log(data)
          this.setData({
            topLists:data
          })
        }
      })
    } 
  },

  toRecommend(){
    wx.navigateTo({
      url: '/pages/recommendSong/recommendSong',
      title:"每日推荐"
    })
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