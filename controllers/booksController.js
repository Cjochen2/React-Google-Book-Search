const db = require('../models')

module.exports = {
    findAll: (req, res) =>{
        db.Book
            .find({})
            .then(book => res.json(book))
    },
    
    saveBook: (req, res) => {
        console.log(req.body)
    }
}