'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('usernames')
      .service('myService')
      .getWelcomeMessage();
  },
});
