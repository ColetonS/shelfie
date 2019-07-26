module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then(allInventory => {
            res.status(200).send(allInventory)
        }).catch(err => {
            console.log(err)
            res.status(400).send('this is my error message')
        })
    },
    // addProduct: async (req, res) => {
    //     const db = req.app.get('db')
    //     let createdProduct = await db.create_product(req.body).catch(err => {
    //         res.sendStatus(500)
    //     })
    //     res.status(201).send(createdProduct)
    // }
    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {product_name, price, img} = req.body
        db.create_product([product_name, price, img])
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send('this is my error message')
        })
    }
}