$("#srcBtn").click(function handleSearchBtn() {
  searchWikipedia();
});

$("#searchInput").keyup(function handleKeyPressed() {
  searchWikipedia();
});

$("#random-btn").click(function handleRandomBtn() {
  window.location.replace("https://en.wikipedia.org/wiki/Special:Random");
});

function searchWikipedia() {
  var searchBarVal = $("#searchInput").val();
  $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=" +
    searchBarVal + "&srlimit=10&callback=?",
    function(data) {
      showResults(data);
    });
}

function showResults(data) {
  $("#result-list").html("");

  if (!data.error) {
    for (i = 0; i < data[1].length - 1; i++) {
      createListElement(data[1][i], data[2][i], data[3][i]);
    }
  }
}

function createListElement(aTitle, aDesc, aURL) {
  $("#result-list").append("<li class='result clearfix'><h2 class='article-header'><a href=" + aURL +
    " target='_blank'>" + aTitle + "</a> </h1><p class='article-desc'>" + aDesc + "</p></li>");
}

// TODO: Animations