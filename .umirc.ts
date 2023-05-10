import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/foo/',
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
