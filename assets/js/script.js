function randomCommentsNumbers() {
	var articleLength = document.getElementsByClassName('comments').length;
	for (var i = 0; i < articleLength; i++) {

		var comments = document.getElementsByClassName('comments').item(i);
		var max = 150;
		var randomNumbers = Math.floor(Math.random() * Math.floor(max));

		comments.innerHTML = randomNumbers;

	}
}