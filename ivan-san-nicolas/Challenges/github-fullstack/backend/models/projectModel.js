const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  name: { type: String },
  description: { type: String },
  url: { type: String },
  participants: [String],
  creator: { type: Schema.Types.ObjectId, ref: 'users' },
});

module.exports = model('projects', projectSchema);
