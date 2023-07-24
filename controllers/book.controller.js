const route = require('express').Router();
const { Book } = require("../models");
const { success, notFound } = require('../helpers');

//POST
route.post('/', async(req,res) => {
    try {
        
        const id = req.user.id;

        const {
            title, author, dateRead, notes, rating
        } = req.body;

        const book = new Book({
            title, author, dateObtained:req.today, dateRead, notes, rating, owner_id
        });

        const addBook = await book.save();

        addBook ?
            success(res,addBook) :
            notFound(res, "Unable to add book to library");

    } catch (err) {
        error(req, err);
    }
});

//GET All
route.get('/all-books', async(req,res) => {
    try {
        
        const getAllBooks = await Book.find({owner_id: req.user.id});

        getAllBooks ?
            success(res,getAllBooks) :
            notFound(res, 'Unable to find any books.')

    } catch (err) {
        error(res,err);
    }
})

//GET One
route.get('/get-one/:id', async (req,res) => {
    try {
        
        const { id } = req.params;

        const book = await Book.find({_id: id});

        book[0] ? 
            success(res, book) :
            notFound(res, "Book not found")


    } catch (err) {
        error(res,err);
    }
});

//GET by Title
route.get('/by-title/:title', async (req, res) => {
    try {

        const { title } = req.params;
        let checkTitle = parseString();

        const book = await Book.find({owner_id: req.user.id, title: checkTitle});
    
        book ? success(res,book) : notFound(res, "Title not found");

    } catch (err) {
        error(res,err);
    }
})

//GET All by Author
route.get('/by-author/:author', async (req, res) => {
    try {
        
        const { author } = req.params;
        const { id } = req.user;
        let checkAuthor;

        const book = await Book.find({owner_id: id, author: checkAuthor});

        book ? success(res,book) : notFound(res, "Author not found");

    } catch (err) {
        error(res,err);
    }
})

//UPDATE One
route.put('/:id', async (req, res) => {
    try {
        
        const ownerID = req.user.id;
        const bookID = req.params.id;

        const filter = {_id: bookID, owner_id: ownerID};
        const info = req.body;
        const returnOption = {new: true};

        const update = await Book.findOneAndUpdate();

        update ? success(res, update) : notFound(res, "Book not found")

    } catch (err) {
        error(res,err);
    }
});

//DELETE One
route.delete('/delete-one/:id', async (req,res) => {
    try {
        
        const { id } = req.params;
        const ownerID = req.user.id;

        const removeBook = await Book.deleteOne({_id: id, owner_id: ownerID});

        removeBook.deletedCount ? success(res, {message: "Deleted!"}) : notFound(res, "Book not found");

    } catch (err) {
        error(res,err);
    }
})

//DELETE by Author
route.delete('/delete-books-by-author/:author', async (req, res) => {
    try {
        
        const { author } = req.params;
        const ownerID = req.user.id;

        const removeAllBookByAuthor = await Book.deleteAll({owner_id: ownerID, author: author});

        removeAllBookByAuthor.deletedCount ?
            success(res, {message: "Author and books removed"}) :
            notFound(res, "Author not found.")


    } catch (err) {
        error(res,err);
    }
})


