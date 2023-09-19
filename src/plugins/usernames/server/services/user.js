"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.entityService.findMany("plugin::usernames.user", query);
  },

  async delete(id) {
    return await strapi.entityService.delete("plugin::usernames.user", id);
  },

  async create(data) {
    return await strapi.entityService.create("plugin::usernames.user", data);
  },
});
