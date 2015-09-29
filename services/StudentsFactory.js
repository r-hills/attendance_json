attendanceTracker.factory('StudentsFactory', function StudentsFactory($http) {

    var factory = {};
    // return $http.get('students.json');


    // factory.students =  [  { name: "Onya Bike", loggedIn: false },
    //                        { name: "Randy Gauntlet",  loggedIn: false }
    //                     ];




	$http.get('students.json').success(function(data) {
		factory.students = data;
        console.log(data);
	});

    return factory;
});





// function QuestionsFactory($http) {
//     var factory = {};
//
//
//     return factory;
// });



// { name: "", loggedIn: false },

// [ { name: "Claire Voyant",   loggedIn: false },
//                      { name: "Anne Thrax",      loggedIn: false },
//                      { name: "Allen Rench",     loggedIn: false },
//                      { name: "Bill Board",      loggedIn: false },
//                      { name: "Anita Job",       loggedIn: false },
//                      { name: "Dwayne Pipe",     loggedIn: false },
//                      { name: "Ginger Vitus",    loggedIn: false },
//                      { name: "Barb Dwyer",      loggedIn: false },
//                      { name: "Onya Bike",       loggedIn: false },
//                      { name: "Randy Gaunlet",   loggedIn: false },
//
//                    ];
