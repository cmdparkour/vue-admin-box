import { MockMethod } from 'vite-plugin-mock'
const baseURL = process.env.VUE_APP_BASE_API

export default [
  {
    url: `${baseURL}/user/login`,
    method: 'post',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben',
        },
      };
    }
  }
] as MockMethod[]