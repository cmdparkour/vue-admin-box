import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import userModule from './mock/user'

export function setupProdMockServer() {
  createProdMockServer([
    ...userModule
  ]);
}
