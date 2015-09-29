questionList.factory('QuestionsFactory', function QuestionsFactory () {
	var factory = {};
	factory.questions = [];
	factory.categories = ["Pool", "Drums", "Copy-Paste", "Brain Surgury", "Pizza", "Misc"];
	factory.show = true;

	factory.addQuestion = function() {
		factory.questions.push({ 		 text: factory.questionText,
									       id: factory.questions.length +1,
									  answers: [],
									 answered: "Not Answered",
									 category: factory.questionCategory
							  });
		factory.questionText = null;
	};


	return factory;

});
