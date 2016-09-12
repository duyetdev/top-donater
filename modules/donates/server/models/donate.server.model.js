'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Donate Schema
 */
var DonateSchema = new Schema({
  item: {
    type: String,
    default: '',
    required: 'Please fill Items',
    trim: true
  },
  number: {
    type: Number,
    default: '',
    required: 'Please fill Number',
    default: 1
  },
  images: {
    type: String,
    default: '',
    // required: 'Please fill Items',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Donate', DonateSchema);
