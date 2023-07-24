const mongoose = require('mongoose');

const Book = mongoose.Schema({ 
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    dateObtained: {
        type: Date,
        required: true
    },
    dateRead: Date,
    notes: String,
    rating: Number,
    owner_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model('Book', BookSchema);