'use strict';

/**
 * psychologist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::psychologist.psychologist');
