

module.exports=
  function (url,data,header,method='GET') {
    return new Promise((resolve, reject)=>{
      wx.request({
        url: `https://locally.uieee.com/${url}`,
        data,
        header,
        method,
        success: resolve,
        fail: reject,
        dataType: 'json'
      })
    })
  }
