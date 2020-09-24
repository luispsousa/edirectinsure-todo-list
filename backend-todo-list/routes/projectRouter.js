const router = require("express").Router();
const Project = require("../models/projectModel");
const auth = require('../middleware/auth');

router.post("/retrieve/", auth, async (req, res) => {
  Project.find({ userId: req.body.userId }, function (err, projects) {
    res.status(200).json(projects);
  });
});

router.post("/create", auth, async (req, res) => {
  const { projectName, userId } = req.body;
  const newProject = new Project({ userId, projectName });
  const savedProject = await newProject.save();
  res.json(savedProject);
});

router.put("/changeName/:id", async (req, res) => {
  const update = { projectName: req.body.projectName };
  const newName = await Project.findOneAndUpdate({ _id: req.params.id }, update, {
    new: true,
  });

  res.status(200).send("Ok");
});

router.delete("/delete/:projectId", async (req, res) => {
  const deleteTask = await Project.deleteOne(
    { _id: req.params.projectId },
    { new: true }
  );
  res.status(200).send("Ok");
});

module.exports = router;
