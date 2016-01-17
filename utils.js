module.exports.filterData = function(data, args) {

    var filteredData = Object.assign([], data);

    Object.keys(args).forEach(function(key) {
        filteredData = filteredData.filter(function(d) {
            return d[key] === args[key];
        });
    });

    return filteredData;
};
