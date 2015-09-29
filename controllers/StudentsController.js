attendanceTracker.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {

	$scope.students = StudentsFactory.students;
	$scope.StudentsFactory = StudentsFactory;

	$scope.updateLoginStatus = function(student) {
		// toggles status between true and false
		student.loggedIn = student.loggedIn ? false:true;
	}

});
