const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();
const upload = require("../config/multerConfig");
const cloudinary = require("../config/cloudinaryConfig");
const Stories = require("../models/storiesSchema");

app.use(bodyParser.json());

router
  .route("/")
  .get((req, res) => {
    Stories.find()
      .then(data => {
        res.send(data).status(200);
      })
      .catch(err => {
        res.send(err);
      });
  })
  .post((req, res) => {
    upload(req, res, function(err) {
      // console.log("req.file.path", req.file.path);

      if (err) {
        return res.send(err);
      }
      console.log("file uploaded to server");
     
      // SEND FILE TO CLOUDINARY
      // console.log("req.file.path", req.file.path);

      const path = req.file.path;
      const uniqueFilename = new Date().toISOString();
      const timestamp = new Date().toLocaleString();

      cloudinary.uploader
        .upload(path, {
          public_id: `blog/${uniqueFilename}`,
          tags: `blog`
        })
        .then(image => {
          console.log("file uploaded to Cloudinary");
          const stories = new Stories({
            storyTitle: req.body.storyTitle,
            imageUrl: image.secure_url,
            story: req.body.story,
            storyMoral: req.body.storyMoral,
            timestamp: timestamp
          });
          stories
            .save()
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              console.log(err);
              res.send(err);
            });
          //res.json(image);
        })
        .catch(err => {
          res.send(err);
        });
    });
  });

module.exports = router;
