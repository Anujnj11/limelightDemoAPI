'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    findFirst: async ctx => {
        const firstOrganization = await strapi.services.organization.findOne();
        return sanitizeEntity(firstOrganization, { model: strapi.models.organization });
    }
};
