
function submitAnswers(){
    questionsEl = document.getElementsByClassName("question");
    inputsEl = document.getElementsByClassName("options");

    inputs = [];
    questions = [];
    answers = []

    titleEl = document.getElementById("titleInput");
    title = titleEl.value;
    if (title.length == 0){
        alert("please enter a title");
            return;
    }

    categoryEl = document.getElementById("category");
    category = categoryEl.value;



    for (var i = 0; i < questionsEl.length; i += 1) {
        if (questionsEl[i].value.length == 0){
            alert("please enter input for all questions");
            return;
        }
        questions.push(questionsEl[i].value);
    }

    for (var i = 0; i < inputsEl.length; i += 1) {
        if (inputsEl[i].value.length == 0){
            alert("please enter input for all options");
            return;
        }
        inputs.push(inputsEl[i].value);
    }

    answerEl = document.getElementsByClassName("answer");

    for (var i = 0; i < answerEl.length; i += 1) {
        answers.push(answerEl[i].value);
    }

    //add quiz to db
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = this.responseText;
            getLatestID(questions,inputs,answers);
            }
        }
    xhttp.open("POST", "/insertQuizIntoDb", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({title: title, category:category},));
}

function getLatestID(questions,inputs,answers){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(this.responseText);
            id = response[0].Quiz_ID;
            updateQuestionDB(questions,inputs,answers,id);
            }
        }
    xhttp.open("GET", "/getLatestID", true);
    xhttp.send();
}

function updateQuestionDB(questions,inputs,answers,quizID){
    for (var i = 0; i < 5; i += 1) {
        question = questions[i];
        option1 = inputs[i*4]
        option2 = inputs[i*4+1]
        option3 = inputs[i*4+2]
        option4 = inputs[i*4+3]
        answer = answers[i];

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var response = this.responseText;

                }
            }
        xhttp.open("POST", "/insertQuestionIntoDb", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify({quizID:quizID, question: question, option1:option1,option2:option2,option3:option3,option4:option4,answer:answer},));
    }
    alert("successfully added quiz");
    goToHome();
}

function goToHome() {
    window.location.replace("https://cow10-code50-88021628-g4r5q96q6cvp5p-8080.preview.app.github.dev");
};