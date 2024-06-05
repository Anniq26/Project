// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Proxy requests to the Facebook SDK
  app.use(
    '/plugins/customer_chat/SDK',
    createProxyMiddleware({
      target: 'https://www.facebook.com',
      changeOrigin: true,
    })
  );

  // Proxy requests to the Facebook Customer Chat plugin facade
  app.use(
    '/plugins/customer_chat/facade',
    createProxyMiddleware({
      target: 'https://www.facebook.com',
      changeOrigin: true,
    })
  );
};
