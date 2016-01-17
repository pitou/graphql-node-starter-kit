var type = require('graphql/type');
var data = require('../../data/games_data');
var utils = require('../../utils');

module.exports.Company = new type.GraphQLObjectType({
    name: 'Company',
    description: 'A company object',
    fields: function() {
        return {
            id: {
                type: type.GraphQLInt,
                description: 'The id of a company',
            },
            name: {
                type: type.GraphQLString,
                description: 'The name of a company',
            },
            nation: {
                type: type.GraphQLString,
                description: 'The nation of a company',
            },
            gamesAsDeveloper: {
                type: new type.GraphQLList(require('../types').Game),
                description: 'The games created as a developer',
                resolve: function(parent, args, ast) {
                    // parent is the company object
                    args.developerName = parent.name;

                    return utils.filterData(data, args);
                }
            },
            gamesAsPublisher: {
                type: new type.GraphQLList(require('../types').Game),
                description: 'The games created as a publisher',
                resolve: function(parent, args, ast) {
                    // parent is the company object
                    args.publisherName = parent.name;

                    return utils.filterData(data, args);
                }
            },
        };
    },
});
