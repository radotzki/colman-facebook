'use strict';

var _ = require('lodash');
var Post = require('./post.model');

// Get list of posts
exports.index = function(req, res) {

  Post
  .find()
  .populate('user', 'name picture')
  .exec(function (err, posts) {
    if(err) { return handleError(res, err); }
    return res.json(200, posts);
  })
};

// Get a single post
exports.show = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    return res.json(post);
  });
};

/**
 * Search posts
 */
 exports.search = function(req, res) {
  req.query.body = new RegExp(req.query.body, "i");
  if (req.query.created) {
    var startDate = new Date(req.query.created);
    var toDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
    req.query.created = { "$gte": startDate, "$lt": toDate };
  }

  Post.find(req.query)
  .populate('user', 'name picture')
  .exec(function (err, posts) {
    if(err) { return handleError(res, err); }
    return res.json(200, posts);
  })
};

// Creates a new post in the DB.
exports.create = function(req, res) {
  Post.create(req.body, function(err, post) {
    if(err) { return handleError(res, err); }
    return res.json(201, post);
  });
};

// Updates an existing post in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Post.findById(req.params.id, function (err, post) {
    if (err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    var updated = _.merge(post, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, post);
    });
  });
};

// Deletes a post from the DB.
exports.destroy = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    post.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  console.log(err);
  return res.send(500, err);
}