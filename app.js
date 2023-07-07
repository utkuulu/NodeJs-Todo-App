require("dotenv").config();
const { connectMongo } = require("./mongo");
const express = require("express");
const ejs = require("ejs");
const pageController = require("./controllers/pageController");
const postController = require("./controllers/postController");

const app = express();

//TEMPLATE ENGİNE
app.set("view engine", "ejs");

// MiddleWares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", postController.getAllTask);
app.post("/", postController.createTask);
app.post("/delete/:id", postController.deleteTask);
app.post("/start/:id", postController.startStatus);
app.post("/finish/:id", postController.finishStatus);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is Online port : ${port}`);
});

connectMongo();
