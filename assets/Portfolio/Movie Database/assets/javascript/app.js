$(document).ready(function () {
    var tempMovies =
        [
            "Killjoy",
            "killjoy 2",
            "killjoy 3",
            "thankskilling",
            "thankskilling 3",
            "wrong turn",
            "wrong turn 2",
            "wrong turn 3",
            "wrong turn 4",
            "wrong turn 5",
            "wrong turn 6",
            "troll",
            "troll 2",
            "dead alive",
            "evil bong"
        ];

    tempMovies.sort();

    var movieIndex = 0;
    console.log(movieIndex);

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB8nbl0wIqSVyMl0b9ZwAwZqAOT2fn7FGM",
        authDomain: "database-my-movies.firebaseapp.com",
        databaseURL: "https://database-my-movies.firebaseio.com",
        projectId: "database-my-movies",
        storageBucket: "database-my-movies.appspot.com",
        messagingSenderId: "1093102432514"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    function loadPageDisplay() {
        var movie = tempMovies[movieIndex]; //myList
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var movieDiv = $("<div class='movieDiv'>");
            movieDiv.attr("data-title", response.Title).attr('data-genre', response.Genre).attr("data-ratings", response.Ratings);
            movieDiv.append(`<img class="poster img-fluid" src="${response.Poster}">`);
            var movieTitle = movieDiv.attr("data-title");
            $("#display").append(movieDiv);
            movieIndex++;
        }).then(function () {
            if (movieIndex < tempMovies.length) {
                loadPageDisplay();
            }
            else {
                movieIndex = 0;
            };
        });
    };

    var isGenre = false;

    function loadPageDisplayGenre(genre) {
        var movie = tempMovies[movieIndex];
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var movieDiv = $("<div class='movieDiv'>");
            movieDiv.attr("data-title", response.Title).attr('data-genre', response.Genre).attr("data-ratings", response.Ratings);
            movieDiv.append(`<img class="poster img-fluid" src="${response.Poster}">`);
            var movieTitle = movieDiv.attr("data-title");
            console.log(movieTitle);
            var genreArray = movieDiv.attr("data-genre").split(", ");
            for (i = 0; i < genreArray.length; i++) {
                if (genre === genreArray[i]) {
                    $("#display").append(movieDiv);
                }
            }
            movieIndex++;
        }).then(function () {
            if (movieIndex < tempMovies.length) {
                loadPageDisplayGenre(genre);
            }
            else {
                movieIndex = 0;
            }
        });
    }

    $(document).on("click", ".home", function () {
        $("#display").empty();
        loadPageDisplay();
    });

    $(".genre").on("click", function () {
        $("#display").empty();
        loadPageDisplayGenre($(this).attr("id"));
    });


    //click selection
    $(document).on("click", ".movieDiv", function () {
        //create our bootstrap elements dynamically
        $("#display").empty().append("<div id='myRow' class='row'></div>");
        $("#myRow").append("<div id='infoCol' class='col'</div>").append("<div id='posterCol' class='col'</div>");
        $("#display").append(`<button id="backButton" type="button" class="btn m-3 home">Back to Menu</button>`)

        //make the call for the chosen movie
        var selection = $(this).attr("data-title");

        var queryURL = "https://www.omdbapi.com/?t=" + selection + "&y=&plot=short&apikey=trilogy";

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#infoCol").append("<h3 id='selectionTitle'></h3><hr>");
            $("#posterCol").append(`<img class="mainPoster img-fluid" src="${response.Poster}">`);
            $("#selectionTitle").text(response.Title);
            $("#infoCol").append(` 
            <h6>Year: ${response.Year}</h6>
            <h6>Rated: ${response.Rated}</h6>
            <h6>Runtime: ${response.Runtime}</h6>
            <h6>Director: ${response.Director}</h6>
            <h6>Writer: ${response.Writer}</h6>
            <h6>Actors: ${response.Actors}</h6>
            <h6>Plot: ${response.Plot}</h6>
            <h6>Genre: ${response.Genre}</h6>
            <h6>Ratings: ${JSON.stringify(response.Ratings[0].Source)}: ${JSON.stringify(response.Ratings[0].Value)}</h6>`);
            if (response.Ratings[1].Source) {
                $("#infoCol").append(`<h6>Ratings: ${JSON.stringify(response.Ratings[1].Source)}: ${JSON.stringify(response.Ratings[1].Value)}</h6>`);
            }
        });
    
});
loadPageDisplay();
});
