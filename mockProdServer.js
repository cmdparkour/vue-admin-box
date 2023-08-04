import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import userModule from './mock/user'
import tableModule from './mock/table'
import cardModule from './mock/card'
import workModule from './mock/work'
import UserMoudle from './mock/systemUser'

export function setupProdMockServer() {
  createProdMockServer([
    ...userModule,
    ...tableModule,
    ...cardModule,
    ...workModule,
    ...UserMoudle
  ]);
}
