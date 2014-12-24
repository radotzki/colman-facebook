'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  body: String,
  date: { type: Date, default: Date.now },
  user: Schema.Types.ObjectId
});

module.exports = mongoose.model('Post', PostSchema);