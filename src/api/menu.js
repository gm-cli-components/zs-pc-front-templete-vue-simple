/*
 * @Author: your name
 * @Date: 2022-03-30 11:27:06
 * @LastEditTime: 2022-03-31 11:42:54
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-demo\src\api\menu.js
 */
import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: '/getSimpleRouters',
    method: 'get'
  })
}
