$(document).ready(function () {
    //audio files
    var audio = new Audio("assets/audio/background.mp3");
    Audio.loop = true; // loop background music
    var winAudio = new Audio("assets/audio/win.mp3");
    var loseAudio = new Audio("assets/audio/lose.mp3");

    //win/loss variables
    var wins = 0;
    var losses = 0;

    var myScore = 0; //score, targetscore, and buttonvalues reset upon win/loss
    var ranNum = (Math.floor(Math.random() * 101) + 19); //number needed to win
    var buttonValues = [];
    for (var i = 0; i < 4; i++) {
        buttonValues.push(Math.round(Math.random() * 12))
    }
    $('#button1').attr('value', buttonValues[0]);

    $('#button2').attr('value', buttonValues[1]);

    $('#button3').attr('value', buttonValues[2]);

    $('#button4').attr('value', buttonValues[3]);
    console.log(buttonValues);

    $("#goal").text("Target Score: " + ranNum);

    //background music toggle on
    $(".theme-button").on("click", function () {
        audio.play();
    });
    //background music toggle off
    $(".pause-button").on("click", function () {
        audio.pause();
    });

    function reset() {
        myScore = 0; //variables are reset
        ranNum = (Math.floor(Math.random() * 101) + 19); //number needed to win
        var buttonValues = [];
        for (var i = 0; i < 4; i++) {
            buttonValues.push(Math.round(Math.random() * 12))
        }
        $('#button1').attr('value', buttonValues[0]);

        $('#button2').attr('value', buttonValues[1]);

        $('#button3').attr('value', buttonValues[2]);

        $('#button4').attr('value', buttonValues[3]);
        $("#goal").text("New Target Score: " + ranNum);
    }
    // on a click event for each crystal, add value of the crystal to the player's score (use this)


    //button click
    $(".crystals").on("click", function () {
        $("#alert").empty();
        myScore += parseInt($(this).attr('value'));
        if (myScore == ranNum) {
            $("#alert").text("You win! Click another crystal to play again!")
            wins += 1;
            winAudio.play();
            reset();
        }
        else if (myScore > ranNum) {
            $("#alert").text("You lose! Click another crystal to play again!")
            losses += 1;
            loseAudio.play();
            reset();
        }
        $("#myScoreElement").text("Score: " + myScore);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
    });
});