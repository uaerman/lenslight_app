import express from "express";
import chalk from "chalk";

const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send('index sayfasi')
})

app.listen(port, () => {
    console.log((`Application running on port: ${chalk.green(port)}`))
})