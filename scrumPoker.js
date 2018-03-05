'use strict';

const testData = require('./testData');

module.exports.name = async function (ctx, id) {
    ctx.body = 'test1234';
};

module.exports.users = async function (ctx) {
    ctx.body = testData;
};