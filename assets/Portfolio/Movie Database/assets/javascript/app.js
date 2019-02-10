$(document).ready(function () {
    var joelMovies =
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
            "troll 2",
            "dead alive",
            "evil bong"
        ];
    var addMovies =
        [
            "Harry Potter and the Sorcerer's Stone",
            "Harry Potter and the Chamber of Secrets",
            "Harry Potter and the Prisoner of Azkaban",
            "Harry Potter and the Goblet of Fire",
            "Harry Potter and the Order of the Phoenix",
            "Harry Potter and the Half-Blood Prince",
            "Harry Potter and the Deathly Hallows: Part 1",
            "Harry Potter and the Deathly Hallows: Part 2",
            "The Lord of the Rings: The Fellowship of the Ring",
            "The Lord of the Rings: The Two Towers",
            "The Lord of the Rings: The Return of the King",
            "The Avengers",
            "Avengers: Infinity War",
            "Captain Marvel",
            "Black Panther",
            "Ant-Man and the Wasp",
            "Spider-Man: Far From Home",
            "Guardians of the Galaxy",
            "Doctor Strange",
            "Iron Man",
            "Ant-Man",
            "Thor: Ragnarok",
            "Thor",
            "Spider-Man: Homecoming",
            "Captain America: The Winter Soldier",
            "Captain America: Civil War",
            "Avengers: Age of Ultron",
            "Guardians of the Galaxy Vol. 2",
            "The Incredible Hulk",
            "Thor: The Dark World",
            "Iron Man 3",
            "Spider-Man 3",
            "Iron Man 2",
            "Spider-Man 2",
            "X-Men",
            "X-Men: First Class",
            "Hulk",
            "Ghost Rider",
            "Fantastic Four",
            "X2",
            "Blade",
            "Daredevil",
            "Bumblebee",
            "Deadpool",
            "Ready Player One",
            "Aquaman",
            "Mission Impossible",
            "Solo",
            "Incredibles",
            "Incredibles 2",
            "The Hunger Games",
            "Star Trek",
            "300",
            "Avatar",
            "Pirates of the Caribbean",
            "The Hobbit: An Unexpected Journey",
            "Cast Away",
            "Indiana Jones",
            "Gone Girl",
            "Zodiac",
            "Shutter Island",
            "Arrival",
            "Source Code",
            "Identity",
            "The Sixth Sense",
            "The Usual Suspects",
            "Crazy Rich Asians",
            "Night School",
            "Sorry to Bother You",
            "Game Night",
            "The Favourite",
            "Johnny English Strikes Again",
            "TAG",
            "Blockers",
            "The Spy Who Dumped Me",
            "Ocean's 11",
            "Get Out",
            "Searching",
            "A Quiet Place",
            "Bad Times at the El Royale",
            "Bird Box",
            "Halloween",
            "Split",
            "A Simple Favor",
            "Glass",
            "Red Sparrow",
            "The Notebook",
            "The Fault in Our Stars",
            "A Star is Born",
            "Love Actually",
            "Call Me by Your Name",
            "Silver Linings Playbook",
            "Set It Up",
            "The Big Sick",
            "About Time",
            "Titanic",
            "First Man",
            "96",
            "Bohemian Rhapsody",
            "Roma",
            "Widows",
            "Interstellar",
            "Inception",
            "The Martian",
            "Annihilation"
        ];
    var tempMovies = joelMovies.concat(addMovies);
    tempMovies.sort();

    var isDoneAjax = true;
    var moviesLoaded = 0;

    var movieIndex = 0;
    console.log(movieIndex);

    // Initialize Firebase
    // var config = {
    //     apiKey: "AIzaSyB8nbl0wIqSVyMl0b9ZwAwZqAOT2fn7FGM",
    //     authDomain: "database-my-movies.firebaseapp.com",
    //     databaseURL: "https://database-my-movies.firebaseio.com",
    //     projectId: "database-my-movies",
    //     storageBucket: "database-my-movies.appspot.com",
    //     messagingSenderId: "1093102432514"
    // };

    // firebase.initializeApp(config);

    // var database = firebase.database();

    function loadPageDisplay() {
        var movie = tempMovies[movieIndex]; //myList
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        isDoneAjax = false;

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var movieDiv = $("<div class='movieDiv'>");
            movieDiv.attr("data-title", response.Title).attr('data-genre', response.Genre).attr("data-ratings", response.Ratings);
            movieDiv.append("<img class='poster img-fluid' src='" + response.Poster + "' >"); //done
            var movieTitle = movieDiv.attr("data-title");
            $("#display").append(movieDiv);
            movieIndex++;
            moviesLoaded++;
            if (moviesLoaded == tempMovies.length) {
                isDoneAjax = true;
                moviesLoaded = 0;
            }
            console.log("Movies Loaded: " + moviesLoaded);
            console.log("Is the ajax done = " + isDoneAjax);
        }).then(function () {
            if (movieIndex < tempMovies.length) {
                loadPageDisplay();
            }
            else {
                movieIndex = 0;
                console.log("it stopped here")
            };
        });

    };

    var isGenre = false;

    function loadPageDisplayGenre(genre) {

        var movie = tempMovies[movieIndex];
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        isDoneAjax = false;
        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var movieDiv = $("<div class='movieDiv'>");
            movieDiv.attr("data-title", response.Title).attr('data-genre', response.Genre).attr("data-ratings", response.Ratings);
            movieDiv.append("<img class='poster img-fluid' src='" + response.Poster + "' >"); //done
            var movieTitle = movieDiv.attr("data-title");
            var genreArray = movieDiv.attr("data-genre").split(", ");
            for (i = 0; i < genreArray.length; i++) {
                if (genre === genreArray[i]) {
                    $("#display").append(movieDiv);
                }
            }
            movieIndex++;
            moviesLoaded++;
            if (moviesLoaded == tempMovies.length) {
                isDoneAjax = true;
                moviesLoaded = 0;
            }
            console.log("Movies Loaded: " + moviesLoaded);
            console.log("Is the ajax done = " + isDoneAjax);
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
        if (isDoneAjax == true) {
            $("#display").empty();
            $("#oneMovie").empty();
            $("#display").attr("style", "display: inherit");
            loadPageDisplay();
        }

    });

    $(".genre").on("click", function () {
        if (isDoneAjax == true) {
            $("#display").empty();
            $("#oneMovie").empty(); 
            $("#display").attr("style", "display: inherit");
            loadPageDisplayGenre($(this).attr("id"));
        }
    });


    //click selection
    $(document).on("click", ".movieDiv", function () {
        //create our bootstrap elements dynamically
        if (isDoneAjax == true) {
            $("#display").attr("style", "display:none");
            $("#oneMovie").append("<div id='myRow' class='row'></div>");
            $("#myRow").append("<div id='infoCol' class='col'</div>").append("<div id='posterCol' class='col'</div>");
            $("#oneMovie").append("<button id='backButton' type='button' class='btn m-3 home'>Back to Menu</button>")


            //make the call for the chosen movie
            var selection = $(this).attr("data-title");

            var queryURL = "https://www.omdbapi.com/?t=" + selection + "&y=&plot=short&apikey=trilogy";

            // Creating an AJAX call for the specific movie button being clicked
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                $("#infoCol").append("<h3 id='selectionTitle'></h3><hr>");
                $("#posterCol").append("<img class='mainPoster img-fluid' src='" + response.Poster + "' >");
                $("#selectionTitle").text(response.Title);
                $("#infoCol").append(
                    "<h6>Year: " + response.Year + "</h6>" +
                    "<h6>Rated: " + response.Rated + "</h6>" +
                    "<h6>Runtime: " + response.Runtime + "</h6>" +
                    "<h6>Director: " + response.Director + "</h6>" +
                    "<h6>Writer: " + response.Writer + "</h6>" +
                    "<h6>Actors: " + response.Actors + "</h6>" +
                    "<h6>Plot: " + response.Plot + "</h6>" +
                    "<h6>Genre: " + response.Genre + "</h6>" +
                    "<h6>Ratings: " + JSON.stringify(response.Ratings[0].Source) + ": " + JSON.stringify(response.Ratings[0].Value) + "</h6>");
                if (response.Ratings[1].Source) {
                    $("#infoCol").append("<h6>Ratings: " + JSON.stringify(response.Ratings[1].Source) + ": " + JSON.stringify(response.Ratings[1].Value) + "</h6>");
                };
            });
        };
    });
    loadPageDisplay();
});
