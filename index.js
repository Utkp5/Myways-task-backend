const express = require('express')
const app = express();
const PORT = 5000;

const cors    = require('cors')
const morgan  =  require("morgan");



app.use(express.json());
app.use(cors({origin: true, credentials: true}));
app.use(morgan("dev"));
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: false }));



//db connection
const dbconnect = require('./Service/dbConfig');
dbconnect();

//dotenv
const dotenv = require('dotenv');
dotenv.config();

//router
const todoRouter = require('./Router/todo');
app.use('/api', todoRouter);



app.listen(PORT,function (error) {
    if (error) {
        console.log(error);
    }
    console.log(`Server started successfully PORT : ${PORT}`);
})