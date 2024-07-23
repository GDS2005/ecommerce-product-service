const path = require('path');
const fs = require('fs');
const catchAsync = require('../utils/catchAsync')

exports.createImage = (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'Please upload an image.' });
  }
  res.status(201).send({ message: 'Image uploaded successfully.' });
};

exports.getImages = catchAsync(async (req, res) => {
  const filename = req.params['filename'] || '';
  // Construct the path to the image file
  const imagePath = path.join(__dirname, '../uploads', filename);

  res.sendFile(imagePath);
});

exports.deleteImage = (filename, callback) => {
  const imagePath = path.join(__dirname, '../uploads', filename);

  // Check if the file exists
  fs.access(imagePath, fs.constants.F_OK, (err) => {
      if (err) {
          // If the file doesn't exist, invoke the callback with an error
          console.log(imagePath);
          callback(new Error("File not found"));
      } else {
          // Delete the file
          fs.unlink(imagePath, (err) => {
              if (err) {
                  // If an error occurs while deleting the file, invoke the callback with the error
                  callback(err);
              } else {
                  // If the file is deleted successfully, invoke the callback with no error
                  callback(null);
              }
          });
      }
  });
};