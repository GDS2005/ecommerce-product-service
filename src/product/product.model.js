const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        required: true,
        trim: true,
      },
      image: {
        type: String,
        required: true,
        trim: true,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      price: {
        type: Number,
        required: true,
        trim: true,
      },
      stock: {
        type: Number,
        required: true,
        trim: true,
      },
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model('Product', ProductSchema);