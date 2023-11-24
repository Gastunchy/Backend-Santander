const moongose = require('mongoose')
const password = process.env.passwordDb

moongose.connect(`mongodb+srv://juanpabloguingold:${password}@cluster0.fbigkan.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Connecting to DB successfully");
    })
    .catch((e) => console.log("Error connecting to DB" + e));
