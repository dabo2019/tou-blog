import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',           // 监听所有网络接口（支持局域网、Docker、手机访问）
    allowedHosts: ['all']       // 允许所有主机访问（最宽松设置）
  }
});