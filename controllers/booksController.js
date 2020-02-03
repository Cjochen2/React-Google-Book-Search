const db = require('../models')

module.exports = {
    findAll: (req, res) => {
        db.Book
            .find({})
            .then(book => res.json(book))
    },

    saveBook: (req, res) => {
        let bookInfo = req.body.volumeInfo
        
        db.Book
            .create({
                id: req.body.id,

                title: bookInfo.title,

                authors: bookInfo.authors,

                description: bookInfo.description,

                image: bookInfo.imageLinks.thumbnail,

                infoLink: bookInfo.infoLink
            })
            .then(res.json("Book Successfully Saved"))
    },

    remove: (req, res) => {
        db.Book
            .deleteOne({id: req.params.id})
            .then(res.json("Book Deleted Successfully"))
    }
}
