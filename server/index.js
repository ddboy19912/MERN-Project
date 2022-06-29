import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
// console.log(process.env)

dotenv.config();

import postsRoutes from './routes/posts.js'

const app = express();



app.use(bodyParser.json({limit : '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit : '30mb', extended: true}));
app.use(cors());


app.use('/posts', postsRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`)))
.catch((error) => console.log(error))

// mongoose.set('useFindAndModify', false)