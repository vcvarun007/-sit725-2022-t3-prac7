const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cardList = [
  {
    title: "Car",
    image: "images/car.jpg",
    link: "About Caaaar",
    desciption: "Demo desciption about Car",
  },
  {
    title: "Bug",
    image: "images/bug.jpg",
    link: "About Bug",
    desciption: "Demo desciption about bug",
  },
];

// app.get("/", (req, res) => {
//   res.render("index.html");
// });

app.get("/api/projects", (req, res) => {
  res.json({ statusCode: 200, data: cardList, message: "Success" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
