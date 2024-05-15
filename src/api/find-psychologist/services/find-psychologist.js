'use strict';

/**
 * find-psychologist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::find-psychologist.find-psychologist');
