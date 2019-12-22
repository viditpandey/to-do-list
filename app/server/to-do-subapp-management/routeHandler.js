const dbConfig = require('../db_config/dbConfig')
// const data = (listId) => ([
//     {text: `Snacks for ${listId}`, date: new Date(), listId},
//     {text: 'buy milk cartons', date: new Date(), listId}
//   ])

const RouteHandler = {
    getListItems: (req, res, next) => {
        console.log(`reading for list ${req.params.listId}`)
        const db = dbConfig.getClient()
        const listItems = []
        var cursor = db.collection('to-do-list').find({listId: req.params.listId});
        cursor.forEach(function(data, error){
            if (error) res.status(501).json({ data: [] })
            else listItems.push(data)
        }, () => res.status(200).json({data: listItems}))
        
    },

    addListItems: (req, res, next) => {
        const db = dbConfig.getClient()
        console.log(`adding item for list ${req.params.listId}`)
        const createdItem = {
            listId: req.body.listId,
            text: req.body.text,
            date: new Date()
        }
        console.log(req.body, 'req.body')
        db.collection('to-do-list').insertOne(createdItem, function (error, done) {
            if (error) res.status(501).json({error: error})
            else res.status(201).json({data: createdItem})
        })
    }
}

module.exports = RouteHandler