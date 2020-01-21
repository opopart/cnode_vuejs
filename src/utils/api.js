import request from './request'

// 获取首页帖子列表数据
export const getTopics = data => {
  return request({
    url: '/topics',
    method: 'get',
    params: data
  })
}
export const getTopicById = id => {
  return request({
    url: `/topic/${id}`,
    method: 'get'
  })
}
export const getUserByName = loginname => {
  return request({
    url: `/user/${loginname}`,
    method: 'get'
  })
}

export const getAccessToken = accesstoken => {
  return request({
    url: `/accesstoken/`,
    method: 'post',
    params: {
      accesstoken
    }
  })
}

export const getMessages = accesstoken => {
  return request({
    url: `/messages/`,
    method: 'get',
    params: {
      accesstoken
    }
  })
}