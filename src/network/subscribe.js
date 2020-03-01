import {request} from './request.js'

export function subscribe(FormData){
  return request({
      method:'get',
      url:'/subscribe/save',
      params:FormData
  })
}