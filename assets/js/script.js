function randomCommentsNumbers() {
	var articleLength = document.getElementsByClassName('comments').length;
	for (var i = 0; i < articleLength; i++) {

		var comments = document.getElementsByClassName('comments').item(i);
		var max = 150;
		var randomNumbers = Math.floor(Math.random() * Math.floor(max));

		comments.innerHTML = randomNumbers;

	}
}

if (window.matchMedia("(min-width: 1025px)").matches) {
	document.getElementsByClassName('p-overImg').item(0).childNodes[1].src = "https://picsum.photos/id/1031/1920/280?grayscale";
}