const dal = require( '../database/dataAccess')

module.exports.index = async function(request) {

    return await dal.getAll('user')
}

