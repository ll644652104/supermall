import {request} from './request'

// export 导出 重新回顾下原先知识
export function getCarouselData() {
  return request({
    url: "/home/multidata"
  })
}
