const Product = require('../product/product.model');
const productValidation = require('../product/product.validation');
const imageController = require('../image/image.controller')

exports.createProduct = async (req, res) => {
    try {
        const { error, value } = productValidation.createProduct.body.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { name, description, image, price, stock, user } = value;

        let product = await Product.findOne({ name });
        if (product) return res.status(400).json({ msg: 'Product already exists' });

        product = new Product({ name, description, image, price, stock, user });

        await product.save();

        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getProducts = async (req, res) => {
    try {
        const results = await Product.find();
        res.json({results});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getProduct = async (req, res) => {
    try {
        const results = await Product.findById(req.params.id);
        if (!results) return res.status(404).json({ msg: 'Product not found' });
        res.json(results);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const { error, value } = productValidation.updateProduct.body.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { name, description, image, price, stock } = value;

        let product = await Product.findById(id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });

        if (name) product.name = name;
        if (description) product.description = description;
        if (image) product.image = image;
        if (price) product.price = price;
        if (stock) product.stock = stock;

        await product.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });

        imageController.deleteImage(product.image, (error) => {
            if (error) {
                console.error("Error deleting image:", error);
            } else {
                console.log("Image deleted successfully");
            }
        });

        await Product.deleteOne({ _id: req.params.id });
        res.json({ msg: 'Product removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};