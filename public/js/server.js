const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
let projectCollection;
let dbConnect = require("./dbConnect");
let projectRoutes = require("../../routes/projectRoutes");
let http = require("http").createServer(app);
let io = require("socket.io")(http);
let socketPort = 8080;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/projects", projectRoutes);

app.get("/addTwoNumbers/:firstNumber/:secondNumber", (req, res, next) => {
  firstNumber = parseInt(req.params.firstNumber);
  secondNumber = parseInt(req.params.secondNumber);
  var result = firstNumber + secondNumber || null;
  if (result == null) {
    res.json({ result: result, statusCode: 400 }).status(400);
  } else {
    res.json({ result: result, statusCode: 200 }).status(200);
  }
});

//mongoDB connection

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://vcvarun007:vcvarun007@cluster0.zfxgxdf.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });

//create collection
// const createColllection = (collectionName) => {
//   client.connect((err, db) => {
//     projectCollection = client.db().collection(collectionName);
//     if (!err) {
//       console.log("MongoDB Connected");
//     } else {
//       console.log("DB Error: ", err);
//       process.exit(1);
//     }
//   });
// };

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 1000);
});

/*
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  // createColllection("RandomTestCollection");
});
*/

http.listen(socketPort, () => {
  console.log(`Listening on socketPort ${socketPort}`);
});
