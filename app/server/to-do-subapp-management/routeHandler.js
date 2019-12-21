// const 
const data = (listId) => ([
    {text: `Snacks for ${listId}`, date: new Date()},
    {text: 'buy milk cartons', date: new Date()}
  ])

const RouteHandler = {
    getListItems: (req, res, next) => {
        console.log(`reading for list ${req.params.listId}`)
        res.json({data: data(req.params.listId)})
    }

    // addListItems: (req, res, next) => {
    //     console.log(`adding item for list ${req.params.listId}`)
    //     const createdItem = {
    //         text: req.body.text,
    //         date: new Date()
    //     }
    //     res.status(201).json({data: createdItem})
    // }
}

module.exports = RouteHandler