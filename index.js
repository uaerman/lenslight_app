import express from "express";
import chalk from "chalk";
import dotenv from "dotenv"
import conn from "./db.js"
import pageRoute from "./routes/pageRoute.js"
import photoRoute from "./routes/photoRoute.js"

dotenv.config()

//Connection to the DB
conn();

const app = express();
const port = process.env.PORT

//Ejs template engine
app.set('view engine', 'ejs')

//Static files middlefiles
app.use(express.static('public'))
app.use(express.json())

//routes
app.use('/', pageRoute)
app.use('/photos', photoRoute)

app.listen(port, () => {
    console.log((`Application running on port: ${chalk.green(port)}`))
})