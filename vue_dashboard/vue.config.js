module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/vue_dashboard_project/vue_dashboard/'
      : '/',
};
