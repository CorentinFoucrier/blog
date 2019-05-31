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
}#wrap {
    display: inline-block;
    position: relative;
    height: 60px;
    float: right;
    padding: 0;
    position: relative;
}

header input[type="text"] {
    height: 34px;
    font-size: 1.5em;
    display: inline-block;
    font-weight: 100;
    border: none;
    outline: none;
    color: #555;
    padding: 3px;
    padding-right: 45px;
    width: 0px;
    position: absolute;
    top: -13px;
    right: 0;
    background: none;
    z-index: 30;
    transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);
    cursor: pointer;
}

header input[type="text"]:focus:hover {
    border-bottom: 1px solid #BBB;
}

header input[type="text"]:focus {
    width: 170px;
    z-index: 10;
    border-bottom: 1px solid #BBB;
    cursor: text;
}
header button[type="submit"] {
    height: 40px;
    width: 40px;
    display: inline-block;
    float: right;
    border: none;
    position: absolute;
    top: -13px;
    right: 0;
    z-index: 20;
    cursor: pointer;
    opacity: 0.4;
    cursor: pointer;
    transition: opacity .4s ease;
    background-color: unset;
    margin: 0;
}

header input[type="submit"]:hover {
    opacity: 0.8;
}