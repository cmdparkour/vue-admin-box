import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: `/mock/card/list`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
          [`list|${pageSize}`]: [{
            'id|+1': 0,
            title: '@ctitle',
            image: 'http://blog.51weblove.com/wp-content/uploads/2019/03/2019032323331541.jpg',
            time: '@date(yyyy-MM-dd hh:mm:ss)'
          }],
          pager: {
            page: page,
            pageSize: pageSize,
            total: 198
          }
        },
        msg: ''
      };
    }
  },
]