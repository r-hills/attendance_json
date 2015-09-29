questionList.factory('UtilitiesFactory', function() {
	return {
		findById: function(collection, id) {
			for (var i=0; i < collection.length; i++) {
				if( collection[i].id == id ) {
					return collection[i];
				}
			}
			return null;
		},
		findByCategory: function(collection, cat){
			var matched = [];
			for (var i = 0; i < collection.length; i++){
				if (collection[i].category == cat){
					matched.push(collection[i]);
				}
			}
			return matched;
		}

	};

});
