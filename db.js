const mongoose = require('mongoose');
const connection = process.DB;
const collection = process.COLLECTION;

const db = async () => {
    try {
        
        mongoose.set('strictQuery', true);

        await mongoose.connect(`${connection}/${COLLECTION}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Database connected to: ${DB}/${collection}.`);

    } catch (err) {
        throw new Error(`Error: ${err.message}`);
    }
}

module.exports = { db, mongoose };