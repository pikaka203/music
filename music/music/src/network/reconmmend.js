import {request} from './index'
export function getReconmmend(){
    return request({
        url:'/banner',

    })
}

export function getReconmmend2(before){
    return request({
        url:'/top/playlist/highquality',
         param:{
          before
         }
    })
}