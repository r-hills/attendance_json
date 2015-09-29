attendanceTracker.controller('StudentsCtrl', ['$scope', '$http', 'StudentsFactory', function StudentsCtrl($scope, $http, StudentsFactory) {


	$http.get('students.json').success(function(data) {
		$scope.students = data;
	})




	// $scope.students = StudentsFactory.students;
	// $scope.StudentsFactory = StudentsFactory;

	$scope.updateLoginStatus = function(student) {
		// toggles status between true and false
		student.loggedIn = student.loggedIn ? false:true;
	}

}]);
