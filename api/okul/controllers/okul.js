'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {

  async find(ctx) {
    console.log('controller.find.tenant', ctx.state.user.tenant);
    ctx.query.tenant = ctx.state.user.tenant;
    console.log('controller.find.query', ctx.query);
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.okul.search(ctx.query);
    } else {
      entities = await strapi.services.okul.find(ctx.query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.okul }));
  },

};
