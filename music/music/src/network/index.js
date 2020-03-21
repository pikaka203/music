import axios from 'axios'
export function request(config) {
    //创建实例
    const instance = axios.create({
         baseURL:'http://musicapi.leanapp.cn',
         timeout:2000
    })

    //请求拦截
    // instance.interceptors.request.use(config=>{
    //     return config
    // },err =>{
    //   //console.log(err);
      
    // }
    // )

    // //响应拦截
    // instance.interceptors.response.use(config=>{
    //     return res.data
    // },err=>{
    //     //console.log(err);
    // }
    // )

    //发送网络请求
    return instance(config)
  }