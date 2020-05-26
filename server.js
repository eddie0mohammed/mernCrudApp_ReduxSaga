

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});


const postRouter = require('./routes/post');



const app = express();


const DB = process.env.MONGO_URI;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('successfully connected to DB'))
.catch((err) => console.log(err));


//MIDDLEWARES
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan('dev'));


//ROUTES
app.use('/posts', postRouter);




const PORT = 8080;

app.listen(PORT, () => {
    console.log('server listening on port ', PORT);
})