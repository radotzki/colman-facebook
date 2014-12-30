'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  body: String,
  created: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  likes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Post', PostSchema);