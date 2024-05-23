'use strict';

/**
 * format-community service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::format-community.format-community');
