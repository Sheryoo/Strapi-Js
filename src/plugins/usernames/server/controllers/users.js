"use strict";

module.exports = {
  async find(ctx) {
    try {
        return await strapi
            .plugin("usernames")
            .service("user")
            .find(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async delete(ctx) {
    try {
      ctx.body = await strapi
        .plugin("usernames")
        .service("user")
        .delete(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async create(ctx) {
    try {
      ctx.body = await strapi
        .plugin("usernames")
        .service("user")
        .create(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
