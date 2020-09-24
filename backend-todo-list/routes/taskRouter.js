const router = require('express').Router();
const Task = require('../models/tasksModel');

router.get("/retrieve/:id", async (req, res) => {
  Task.find({ projectId: req.params.id }, (err, tasks) => {
    res.status(200).json(tasks);
  });
});

router.post("/create", async (req, res) => {
  const { checked, taskName, projectId } = req.body;
  const task = new Task({ checked, taskName, projectId });
  task.save((err) => {
    if (err) {
      res.status(500).send("Error registering new task please try again.");
    } else {
      res.status(200).send("New task added!");
    }
  });
});

router.put("/status/:id", async (req, res) => {
  const update = { completed: req.body.checked, doneTime: Date.now() };
  let newTask = await Task.findOneAndUpdate({ _id: req.params.id }, update, {
    new: true,
  });

  res.status(200).send("Ok");
});

router.delete("/delete/:id", async (req, res) => {
  let deleteTask = await Task.deleteOne({ _id: req.params.id }, { new: true });
  res.status(200).send("Ok");
});

module.exports = router;