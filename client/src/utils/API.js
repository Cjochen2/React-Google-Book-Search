import axios from 'axios'

export default {
    getBooks: () => {
        return axios.get("/api/books")
    },

    saveBook: (bookData) => {
        return axios.post("/api/books", bookData)
    },

    deleteBook: (id) => {
        return axios.delete("/api/books/" + id)
    }
}