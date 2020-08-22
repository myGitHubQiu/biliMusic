class Request{
  constructor(){
    this.baseUrl="http://localhost:3000/"
  }
  get(url,data={}){
    return this.request(url,data,"get")
  }

  post(){
    return this.request(url,data,"post")
  }

  put(){
    return this.request(url,data,"put")
  }

  delete(){
    return this.request(url,data,"delete")
  }

  request(url,data,method){
    return new Promise((resolve,reject)=>{
      wx.request({
        url:this.baseUrl+url,
        data,
        method,
        success:({data})=>{
          resolve(data)
        },
        fail:(err)=>{
          reject(err)
        }
      })
    })
  }
}
module.exports = new Request()