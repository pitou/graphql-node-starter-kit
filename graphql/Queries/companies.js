var type = require('graphql/type');
var Company = require('../types').Company;

module.exports.companies = {
    type: new type.GraphQLList(Company),
    args: {
        name: { type: type.GraphQLString },
        nation: { type: type.GraphQLString }
    },
    resolve: function(parent, args, ast) {

        var data = require('../../data/companies_data');
        var utils = require('../../utils');

        console.log("Companies args: " + JSON.stringify(args));

        return utils.filterData(data, args);
    },
};
