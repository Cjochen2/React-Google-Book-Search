const db = require('../models')

module.exports = {
    findAll: (req, res) => {
        db.Book
            .find({})
            .then(book => res.json(book))
    },

    saveBook: (req, res) => {
        console.log(req.body)
        let bookInfo = req.body.volumeInfo


        db.Book
            .find({ title: bookInfo.title, author: bookInfo.author })
            .then((foundItem) => {
                console.log(foundItem)
                if (!foundItem) {
                    db.Book
                        .insert({
                            title: bookInfo.title,

                            author: bookInfo.author,

                            description: bookInfo.description,

                            image: bookInfo.imageLinks.thumbnail,

                            infoLink: bookInfo.infoLink
                        })
                        .then( res.json("Book Saved!"))
                } else {
                    res.json("You have already saved this book to your collection!")
                }
            })
    }

}
