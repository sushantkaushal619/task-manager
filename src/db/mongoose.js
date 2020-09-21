
//node dev run
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
 useNewUrlParser: true,
 useCreateIndex: true,
 useFindAndModify: false// deprecting the mongoDB native driver,
})


