const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const postRoutes = require('./routes/post')
const categoryRoutes = require('./routes/category')
const cartRoutes = require('./routes/cartRoutes')



const app = express()
const PORT = 5500

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/E_commerce')
.then(() => console.log('MongoDb is connected'))
.catch(err => console.log('DB Error ',err) )

app.use('/api/posts', postRoutes)
app.use('/api/category', categoryRoutes)
app.use('api/carts', cartRoutes)



app.listen(PORT, () => console.log(`server running on port : ${PORT}`))