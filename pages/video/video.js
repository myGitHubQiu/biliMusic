// 引入request
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoNavList:[],
    navId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取导航列表数据
    wx.request({
      url: 'http://localhost:3000/video/group/list',
      success:({data})=>{
        // console.log(data)
        const videoNavList = data.data.slice(0,20)
        this.setData({
          videoNavList,
          // 设置第一个元素默认显示有下划线
          navId:videoNavList[0].id
        })
        // onload后要加载视频列表
        this.getVideoById(this.data.navId)
      }
    })
  },

  // 改变active
  handleChangActive(e){
    this.setData({
      navId:e.currentTarget.dataset.id
    })
     // 点击切换后要加载视频列表
     this.getVideoById(this.data.navId)
    // console.log(typeof (e.currentTarget.dataset.id))
  },

  // 根据navId获取视频列表
 async getVideoById(id){
    const res = await request.get('video/group',{
      id:id
    })
    console.log(res)
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