module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then(allInventory => {
            res.status(200).send(allInventory)
        }).catch(err => {
            console.log(err)
            res.status(400).send('this is my error message')
        })
    }
}