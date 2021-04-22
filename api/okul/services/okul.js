'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {

  find(params, populate) {
    console.log('service.find.params', params);
    console.log('service.find.populate', populate);
    return strapi.query('okul').find(params, populate);
  },

};
