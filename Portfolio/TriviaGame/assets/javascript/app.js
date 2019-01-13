$("document").ready(function () {

    //create an array of my quiz questions, yo 
    var questions = [
        {
            question: "Which of Ron's brothers is a Gryffindor Prefect in Harry's first year?",
            options: ["Percy", "Bill", "Fred", "George"],
            optionCorrect: ["true", "false", "false", "false"],
            answer: "Percy",
            imageURL: "https://media.giphy.com/media/T3bQq0AIWOVHy/giphy.gif"
        },
        {
            question: "When is Harry Potter's birthday?",
            options: ["June 5th", "July 31st", "January 15th", "March 8th"],
            optionCorrect: ["false", "true", "false", "false"],
            answer: "July 31st",
            imageURL: "https://media.giphy.com/media/2RNSYVaF3InsI/giphy.gif"
        },
        {
            question: "What do Hermione Granger's parents do for a living?",
            options: ["Dentists", "Doctors", "Lawyers", "Farmers"],
            optionCorrect: ["true", "false", "false", "false"],
            answer: "Dentists",
            imageURL: "https://media.giphy.com/media/BQukTZWdbbY1q/giphy.gif"
        },
        {
            question: "How many horcruxes did Voldemort create?",
            options: ["three", "four", "seven", "eleven"],
            optionCorrect: ["false", "false", "true", "false"],
            answer: "seven",
            imageURL: "https://media.giphy.com/media/rY1nzT6NpjdVC/giphy.gif"
        },
        {
            question: "What's Hermione's middle name?",
            options: ["Jane", "Francis", "Kathryn", "Jean"],
            optionCorrect: ["false", "false", "false", "true"],
            answer: "Jean",
            imageURL: "https://media.giphy.com/media/OzHKDlB6CqwZG/giphy.gif"
        },
        {
            question: "Which form does James Potter's patronus take?",
            options: ["Moose", "Tiger", "Stag", "Dog"],
            optionCorrect: ["false", "false", "true", "false"],
            answer: "Stag",
            imageURL: "https://media.giphy.com/media/WQ1sJO1stRfIQ/giphy.gif"
        },
        {
            question: "Which dragon did Harry have to fight in the Goblet of Fire?",
            options: ["Norweigan Ridgeback", "Romanian Longhorn", "Hungarian Horntail", "Chinese Fireball"],
            optionCorrect: ["false", "false", "true", "false"],
            answer: "Hungarian Horntail",
            imageURL: "https://media.giphy.com/media/DL5jb720n5IRO/giphy.gif"
        },
        {
            question: "What is the name of the three-headed dog guarding the sorcerer's stone?",
            options: ["Fluffy", "Buckbeak", "Fang", "Norbert"],
            optionCorrect: ["true", "false", "false", "false"],
            answer: "Fluffy",
            imageURL: "https://media.giphy.com/media/UcTpLCSTvVDri/giphy.gif"
        },
        {
            question: "Which of the following is NOT an ingredient in polyjuice potion?",
            options: ["Leeches", "Acromantula venom", "Knotgrass", "Lacewing flies"],
            optionCorrect: ["false", "true", "false", "false"],
            answer: "Acromantula venom",
            imageURL: "https://media.giphy.com/media/visqnxJuil0Y0/giphy.gif"
        },
        {
            question: "What is Voldemort's real name?",
            options: ["Tim Marvel Riddle", "Tim Martin Riddick", "Tom Marvolo Riddle", "Tim Marcel Riddick"],
            optionCorrect: ["false", "false", "true", "false"],
            answer: "Tom Marvolo Riddle",
            imageURL: "https://media.giphy.com/media/IWfm4Mcfjw4Yo/giphy.gif"
        }
    ]


    //create the variable to hold our counter
    var intervalId;

    //hide everything until the start button is pressed
    $(".question-list").hide();


    //these variables will hold the number of correct answers, incorrect answers, and unanswered questions
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var unAnswered = 0;
    var counterNumber = 10;
    var questionCounter = 0;
    var timerRunning = false;
    var canAnswer = false;
    var gameStarted = false;
    var answerResponse;
    var percentage;
    var score;
    var grade;

    //populate questions
    function getQuestion() {
        canAnswer = true;
        $("#answerResponse").empty();
        $("#timer").text(10);
        counterNumber = 10;
        startTimer();
        console.log("Answered: ", correctAnswer, "Incorrect: ", incorrectAnswer, "Unanswered: ", unAnswered);
        if (questionCounter === questions.length) {
            endGame();
        }
        else {
            $("#optionslist").empty();
            $("#question").text(questions[questionCounter].question);
            for (var i = 0; i < questions[questionCounter].options.length; i++) {
                $("#optionslist").append("<div class='options mx-auto' data=" + questions[questionCounter].optionCorrect[i] + " >" + questions[questionCounter].options[i] + "</div>");
            }
            questionCounter++;
        }
    }
    //this is the function that will run between questions
    function loadingScreen() {
        canAnswer = false;
        $("#loadingScreen").append(`<img src=${JSON.stringify(questions[questionCounter - 1].imageURL)} class ='text-center img-fluid' alt=${questions[questionCounter - 1]}/>`);
        setTimeout(function () {
            getQuestion();
            $("#loadingScreen").empty();
        }, 3000)

    }
    //timer function
    function startTimer() {
        if (!timerRunning) {
            intervalId = setInterval(decrement, 1000);
            timerRunning = true;
        }
    }

    //function that is run on the interval
    function decrement() {
        counterNumber--;
        $("#timer").text(counterNumber);
        if (counterNumber === 0) {
            unAnswered++;
            $("#answerResponse").text(`You didn't even answer! The correct answer is ${JSON.stringify((questions[questionCounter - 1].answer))}`);
            stopTimer();
            loadingScreen();
        }
    }
    //function to stop the timer
    function stopTimer() {
        clearInterval(intervalId);
        timerRunning = false;
    }

    //function at endgame
    function endGame() {
        percentage = (correctAnswer / questions.length);
        score = percentage * 100;
        console.log(percentage);
        console.log(score);
        stopTimer();
        $(".col").empty();
        switch (true) {
            case (score <= 100 && score >= 90):
                grade = 'A';
                break;
            case (score <= 89 && score >= 80):
                grade = 'B';
                break;
            case (score <= 79 && score >= 70):
                grade = 'C';
                break;
            case (score <= 69 && score >= 60):
                grade = 'D';
                break;
            case (score <= 59 && score >= 0):
                grade = 'F';
                break;
            case (score > 100 && score < 0):
                grade = 'INVALID SCORE';
                break;
        }
        $(".col").append(
            `<div id = "endScreen">
            <div class="end"> <strong>Quiz Results</strong> </div>
            <hr>
            <div class="end">Correct answers: ${correctAnswer} </div>
            <div class="end">Incorrect answers: ${incorrectAnswer} </div>
            <div class="end">Unanswered Questions: ${questions.length - correctAnswer - incorrectAnswer} </div>
            <div class="end">Percentage Correct: ${score}%</div>
            <div class="end">Grade: ${grade}</div>
            </div>`
        );
        
        $("#letterGrade")
        $(".question-list").css("height", "300px");



    }

    //start the game + get the first question
    function startGame() {
        getQuestion();
    }

    //how to pick questions
    $(document).on("click", ".options", function () {
        if (canAnswer) {
            if ($(this).attr("data") === "true") {
                correctAnswer++;
                $("#correctAnswer").html("<div>Correct Answer: " + correctAnswer + "</div>");
                stopTimer();
                $("#answerResponse").text("Correct! Great job!");
                loadingScreen();
            } else {
                incorrectAnswer++;
                $("#incorrectAnswer").html("<div>Incorrect Answer: " + incorrectAnswer + "</div>");
                stopTimer();
                $("#answerResponse").text(`Incorrect. The correct answer is ${JSON.stringify((questions[questionCounter - 1].answer))}`);
                loadingScreen();
            }
        }

    });

    $("#start-button").on("click", function () {
        if (!gameStarted) {
            startGame();
            $("#start-button").hide();
            $(".question-list").show();
            gameStarted = true;
        }
    });

});
