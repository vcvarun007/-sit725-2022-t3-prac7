const express = require("express");
const router = express.Router();
// let client = require("../public/js/dbConnect");
let client = require("../public/js/dbConnect");
let controller = require("../controller");

setTimeout(() => {
  projectCollection = client.db().collection("Projects");
}, 2000);

//insert project
const insertProjects = (project, callback) => {
  projectCollection.insert(project, callback);
};

//post method
router.post("/", (req, res) => {
  controller.projectController.createProject(req, res);
  //   console.log("New Project added", req.body);
  //   var newProject = req.body;
  //   insertProjects(newProject, (err, result) => {
  //     if (err) {
  //       res.json({ statusCode: 400, message: err });
  //     } else {
  //       res.json({
  //         statusCode: 200,
  //         message: "Project Successfully added",
  //         data: result,
  //       });
  //     }
  //   });
});

// get project...
// const getProjects = (callback) => {
//   projectCollection.find({}).toArray(callback);
// };

router.get("/", (req, res) => {
  controller.projectController.retrieveProject(req, res);
  //   getProjects((err, result) => {
  //     if (err) {
  //       res.json({ statusCode: 400, message: err });
  //     } else {
  //       res.json({ statusCode: 200, message: "Success", data: result });
  //     }
  //   });
});

module.exports = router;
