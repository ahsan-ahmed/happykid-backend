const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "merndev",
  api_key: "932745757852522",
  api_secret: "TaBwjO9FUrIC3OzOT5AdvMazIpM"
});

module.exports = cloudinary;
