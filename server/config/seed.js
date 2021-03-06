/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

 'use strict';

 var Post = require('../api/post/post.model');
 var User = require('../api/user/user.model');

 User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    phone: '0546695006',
    city: 'Tel Mond',
    cityCordinate: { lat: 32.256608, lng: 34.918460 },
    age: 22,
    picture: 'avatar1.jpg'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'John Doh',
    email: 'john@doh.com',
    password: '1234',
    phone: '0546695002',
    city: 'Tel Aviv',
    cityCordinate: { lat: 32.085300, lng: 34.781768 },
    age: 21,
    picture: 'avatar2.jpg'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Yasmin Flower',
    email: 'yas@doh.com',
    password: '1234',
    phone: '0546695003',
    city: 'Tel Aviv',
    cityCordinate: { lat: 32.085300, lng: 34.781768 },
    age: 23,
    picture: 'avatar4.jpg'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Dror Tirosh',
    email: 'dror@doh.com',
    password: '1234',
    phone: '0546695004',
    city: 'New York',
    cityCordinate: { lat: 40.712784, lng: -74.005941 },
    age: 21,
    picture: 'avatar2.jpg'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Yuval Shalev',
    email: 'yu@doh.com',
    password: '1234',
    phone: '0546695005',
    city: 'Los Angeles',
    cityCordinate: { lat: 34.052234, lng: -118.243685 },
    age: 20,
    picture: 'avatar4.jpg'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Po Kador',
    email: 'pu@doh.com',
    password: '1234',
    phone: '0547797660',
    city: 'Los Angeles',
    cityCordinate: { lat: 34.052234, lng: -118.243685 },
    age: 21,
    picture: 'avatar3.jpg'
  } , function() {
    console.log('finished populating users');
    addPosts();
  }
  );
});


function addPosts () {
  Post.find({}).remove(function() {

    User.findOne({name: 'Po Kador'}, '-salt -hashedPassword', function (err, user) {
      Post.create({
        body : 'Development Tools',
        user : user,
        likes: 2,
        created: new Date('October 16, 2014')
      } , {
        body : 'Second One',
        user : user,
        likes: 4,
        created: new Date('Dec 27, 2014')
      });
    });

    User.findOne({name: 'Yuval Shalev'}, '-salt -hashedPassword', function (err, user) {
      Post.create({
        body : 'Hello everyone and welcome aborad!',
        user : user,
        likes: 25,
        created: new Date('Nov 22, 2014')
      } , {
        body : 'Loren ipsum',
        user : user,
        likes: 0,
        created: new Date('Nov 02, 2014')
      });
    });

    User.findOne({name: 'Yasmin Flower'}, '-salt -hashedPassword', function (err, user) {
      Post.create({
        body : 'Some moments from the Loud live set',
        user : user,
        likes: 98,
        created: new Date('October 3, 2014')
      } , {
        body : 'Pope Francis leads global prayers for peace on Earth during midnight Mass at St. Peters Basilica at the Vatican',
        user : user,
        likes: 14,
        created: new Date()
      });
    });

  });  
}
