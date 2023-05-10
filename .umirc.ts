import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/contact/',
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
