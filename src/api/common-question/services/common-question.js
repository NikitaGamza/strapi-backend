'use strict';

/**
 * common-question service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::common-question.common-question');
