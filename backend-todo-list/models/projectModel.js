const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  projectName: { type: String, required: true }
}, {
  collection: 'projects'
}
);

module.exports = mongoose.model("Project", ProjectSchema);