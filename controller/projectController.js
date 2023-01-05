let projectModel = require("../models/project");

//create project
const createProject = (req, res) => {
  console.log("New Project added", req.body);
  var newProject = req.body;
  projectModel.insertProjects(newProject, (err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({
        statusCode: 200,
        message: "Project Successfully added",
        data: result,
      });
    }
  });
};

//retrieve project
const retrieveProject = (req, res) => {
  projectModel.getProjects((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, message: "Success", data: result });
    }
  });
};

module.exports = { createProject, retrieveProject };
