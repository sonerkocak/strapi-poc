
/*
query {
  okulsCount(where: {tenant: 1})
}
*/

module.exports = {
  query: `
    okulsCount(where: JSON): Int!
  `,
  resolver: {
    Query: {
      okulsCount: {
        description: 'Return the count of okuls',
        resolverOf: 'application::okul.okul.count',
        resolver: async (obj, options, ctx) => {
          return await strapi.api.okul.services.okul.count(options.where || {});
        },
      },
    },
  },
};
