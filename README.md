# Reading List - Broken Server Lab
## Application Details
This server has been pieced together and should allow for users to be created, updated and deleted. After a user has been created, they can then start adding books to their personal library. They must be logged in to do so as all of the books created run through a validation.

Currently the build should connect to a Mongo database and tested using Postman.
- Within the `assets` folder, you will find both the `collection` json and `environments` json files to help with testing.
- On how to use these, check out this [documentation](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/).
- It is not required to have this part correctly added to your postman. It only helps through testing. If this isn't done, just know that you will need to create your own testing routes and evaluate the checks manually.

## Concept
This application was built out pretty quickly and has quiet a few bugs littered throughout it. You've been tasked in going through it, finding the various bugs, cleaning it up, and getting this correctly working through Postman.

What has been **verified as correct** is the `package.json`, `.gitignore`, `example.env` files, and all files within the `assets` folder. This mean that you should not need to manipulate any data within those files, otherwise, you'll find that you've created more bugs to correct!

It should also be noted that *most* files needs to be corrected; however there may be a couple files that are correct. Just be sure to follow the error messages.

## Getting Started
You will need to create your own `.env` file. It has been **verified** and the **package.json** file is set up correctly. This means, after forking this to your own repository and cloning it down to your workstation, be sure to install the required dependencies to run this server.

Evalute the `example.env` to detail what needs to be included within your `.env` file.

Mongo needs to be up and running.

The server needs to be running as well.

## Resources to Consider
- [Mongoose Connection](https://www.freecodecamp.org/news/mongodb-mongoose-node-tutorial/)
- [ObjectIds](https://mongoosejs.com/docs/schematypes.html#objectids)
- [Methods](https://www.mongodb.com/docs/manual/reference/method/)
- [find()](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/)
  - [Conditions](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/#query-for-multiple-conditions)
- [deleteOne()](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/)
- [deleteMany()](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteMany/)

## Light at the End of the Tunnel
There are a total of **29 bugs** within the express application.
