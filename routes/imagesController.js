const express = require("express");
const router = express.Router();

const ImageModel = require("../models/imagesModel");

router.get("/", (req, res) => {
  ImageModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error to get images" + err);
  });
});

router.get("/projects", async (req, res) => {
  try {
    const projects = await ImageModel.aggregate([
      {
        $group: {
          _id: "$projectTitle",
          title: { $first: "$projectTitle" },
          description: { $first: "$projectDescription" },
          technologies: { $first: "$technologies" },
          type: { $first: "$type" },
          details: { $first: "$details" },
          links: { $first: "$links" },
          images: {
            $push: {
              name: "$name",
              caption: "$caption",
              chemin: "$chemin",
            },
          },
        },
      },
    ]);
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", (req, res) => {
  const newImage = new ImageModel({
    name: req.body.name,
    caption: req.body.caption,
    chemin: req.body.chemin,
    projectTitle: req.body.projectTitle,
    projectDescription: req.body.projectDescription,
    technologies: req.body.technologies,
    type: req.body.type,
    details: req.body.details,
    links: req.body.links,
  });
  newImage.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error creating image :" + err);
  });
});

router.put("/project/:projectTitle", async (req, res) => {
  try {
    const { projectTitle } = req.params;
    await ImageModel.updateMany(
      { projectTitle },
      {
        $set: {
          projectDescription: req.body.projectDescription,
          technologies: req.body.technologies,
          type: req.body.type,
          details: req.body.details,
          links: req.body.links,
        },
      }
    );
    res.status(200).json({ message: "Projet mis à jour avec succès" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
