import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import userModule from './mock/user'
import tableModule from './mock/table'

export function setupProdMockServer() {
  createProdMockServer([
    ...userModule,
    ...tableModule
  ]);
}
