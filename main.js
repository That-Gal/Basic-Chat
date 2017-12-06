var questionNumber = 0;  // Declares the first question
var question = '<h1> What is your name?</h1>'; // Declares the first question

var output = document.getElementById("output");
output.innerHTML = question; // Declares output and sets it as a question

function chatBox() {
    var input = document.getElementById("input").value;
    console.log(input);
    
    if (questionNumber == 0) {
        output.innerHTML = '<h1>Hello ' + input + '!' + '</h1>'; // Outputs Hello with the name entered 
        document.getElementById("input").value = ""; // Clear the text box after you hit enter
        question = '<h1> How old are you?</h1>'; // Overide the declared question with a new one
        setTimeout(timedQuestion, 2000); // After the user enters the info, it will wait 2 secs for the next question
    }

    else if(questionNumber == 1) {
        output.innerHTML = '<h1> That means you were born in ' + (2017 - input) + '</h1>';
        document.getElementById("input").value = "";
        question = '<h1> Where are you from?</h1>';
        setTimeout(timedQuestion, 3000);
    }
}

function chatBoxTwo () {
    var input = document.getElementById("input").value;
    console.log(input);
    if (questionNumber == 2) {
        output.innerHTML = '<h1>' + input + ' must be a nice place to live!' + '</h1>';
        document.getElementById("input").value = "";
        question = '<h1> What is your favorite color?</h1>';
        setTimeout(timedQuestion, 3000);
    }

    else if (questionNumber == 3) {
        output.innerHTML = '<h1> The only color that I simply adore is ' + input + '</h1>';
        document.getElementById("input").value = "";
        question = '<h1> Type Goodbye</h1>';
        setTimeout(timedQuestion, 3000);
    }
}

function chatBoxThree () {
    if(questionNumber == 4) {
        output.innerHTML = '<h1> I ' + ' will' + ' see you again' + '<h1>';
        document.getElementById("input").value = "";
        setTimeout(timedQuestion, 3000);
    }
}

function timedQuestion () {
    output.innerHTML = question;
}

/* Writing some jQuery to active the enter button */
$(document).keypress(function(event) {
    if (event.which == 13) {
        chatBox(), chatBoxTwo(), chatBoxThree();
        questionNumber++;
    }
});