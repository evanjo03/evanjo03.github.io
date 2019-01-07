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
    var buttonOneVal = (Math.floor(Math.random() * 12) + 1);// value assigned to button one
    var buttonTwoVal = (Math.floor(Math.random() * 12) + 1);// value assigned to button two
    var buttonThreeVal = (Math.floor(Math.random() * 12) + 1);// value assigned to button three
    var buttonFourVal = (Math.floor(Math.random() * 12) + 1);// value assigned to button four
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
        buttonOneVal = (Math.floor(Math.random() * 12) + 1);// value assigned to button one
        buttonTwoVal = (Math.floor(Math.random() * 12) + 1);// value assigned to button two
        buttonThreeVal = (Math.floor(Math.random() * 12) + 1);// value assigned to button three
        buttonFourVal = (Math.floor(Math.random() * 12) + 1);// value assigned to button four
        $("#goal").text("New Target Score: " + ranNum);
    }
    // on a click event for each crystal, add value of the crystal to the player's score (use this)

    //ALL BUTTON CLICK EVENTS BELOW
    
    //button one click
    $("#button1").on("click", function () { 
        $("#alert").empty();
        myScore += buttonOneVal;
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

    //button two click
    $("#button2").on("click", function () {
        $("#alert").empty();
        myScore += buttonTwoVal;
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

    //button three click
    $("#button3").on("click", function () {
        $("#alert").empty();
        myScore += buttonThreeVal;
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
    //button four click
    $("#button4").on("click", function () {
        $("#alert").empty();
        myScore += buttonFourVal;
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