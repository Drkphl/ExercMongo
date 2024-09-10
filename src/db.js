const mongoose = require('mongoose');
const mongoDB = "mongodb://localhost:27017"

async function main(){
    await mongoose.connect(mongoDB)
}

main()
    .then(() => console.log("connectado com o banco"))
    .catch(err => console.log(err))


module.exports  = mongoose