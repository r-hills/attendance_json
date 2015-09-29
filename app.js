var attendanceTracker = angular.module('attendanceTracker',['ui.router']);


attendanceTracker.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('home', {
		url: "",
		views: {
			'body': {
				templateUrl: "partials/home.html",
				controller: "StudentsCtrl"
			},
			'footer': {
				templateUrl: "partials/footer.html",
				controller: "HeaderCtrl"
			},
		}
	});

	$stateProvider.state('teachers', {
		url: "/teachers",
		views: {
			'body': {
				templateUrl: "partials/teachers.html",
				controller: "TeachersCtrl"
			},
			'footer': {
				templateUrl: "partials/footer.html",
				controller: "HeaderCtrl"
			},
		}
	});

	$stateProvider.state('students', {
		url: "/students",
		views: {
			'body': {
				templateUrl: "partials/students.html",
				controller: "StudentsCtrl"
			},
			'footer': {
				templateUrl: "partials/footer.html",
				controller: "HeaderCtrl"
			},
		}
	});


});
