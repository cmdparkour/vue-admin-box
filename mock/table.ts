import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: `/mock/table/list`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
          [`list|${pageSize}`]: [{
            'id|+1': '0',
            userName: '123',
            sex: 1,
            hobby: 'jump'
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
  }
]