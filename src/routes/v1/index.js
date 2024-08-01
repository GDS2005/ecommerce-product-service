const express = require('express');
const router = express.Router();
const imageController = require('../../image/image.controller')
const productController = require('../../product/product.controller');
const upload = require('../../middlewares/multer')

router
  .route('/')
  .post(productController.createProduct)
  .get(productController.getProducts);

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);


router
  .route('/files')
  .post(upload.single('image'), imageController.createImage);

router
  .route('/files/:filename')
  .get(imageController.getImages);

module.exports = router;