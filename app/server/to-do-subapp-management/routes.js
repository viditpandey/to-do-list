const app = require('express')()
const RouteHandler = require('./routeHandler')

app.route('/list/:listId')
    .get(RouteHandler.getListItems)
    .post(RouteHandler.addListItems)

module.exports = app