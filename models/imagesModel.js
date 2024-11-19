const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: [
    {
      type: String,
    },
  ],
  type: {
    type: String,
    enum: ["client", "professional", "personal"],
    default: "client",
  },
  details: [
    {
      type: String,
    },
  ],
  links: {
    demo: String,
    github: String,
  },
  images: [
    {
      name: {
        type: String,
        required: true,
      },
      caption: {
        type: String,
        required: true,
      },
      chemin: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("images", ProjectModel);
