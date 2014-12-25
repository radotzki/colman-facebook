(function() {
	'use strict';

	angular
	.module('app.feed')
	.controller('IndexFeed', IndexFeed);

	/* @ngInject */
	function IndexFeed(feedSvc, Auth, socket, profileSvc) {
		/*jshint validthis: true */
		var vm = this;
		vm.posts;
		vm.currentUser;
		vm.newPost;

		vm.create = create;
		vm.update = update;
		vm.remove = remove;

		activate();

		function activate() {
			getPosts();
			vm.currentUser = Auth.getCurrentUser();
		}

		function getPosts () {
			feedSvc.index().then(function() {
				vm.posts = feedSvc.getResult();
				socket.syncUpdates('post', vm.posts, socketCallback);
			})
		}

		function socketCallback (event, item, array) {
			profileSvc.getUser(item.user).then(function(){
				item.user = profileSvc.getResult();
			})
		}

		function create () {
			vm.newPost.user = vm.currentUser._id;
			feedSvc.create(vm.newPost).then(function() {
				vm.newPost.body = null;
			});
		}

		function update (post) {
			feedSvc.update({_id: post._id, body: post.body});
		}

		function remove (post) {
			feedSvc.remove({_id: post._id});
		}

	}
})();