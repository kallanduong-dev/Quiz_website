

function goToQuizSelect(){
    window.location.replace("https://cow10-code50-88021628-g4r5q96q6cvp5p-8080.preview.app.github.dev/quizSelect.html");
}

function goToAnswerQuiz(){
    window.location.replace("https://cow10-code50-88021628-g4r5q96q6cvp5p-8080.preview.app.github.dev/answerQuiz.html");
}

function loadButtons(){
    var buttons = document.getElementsByClassName("catButton");
    var buttonsCount = buttons.length;
    for (var i = 0; i <= buttonsCount; i += 1) {
        if (buttons[i] == undefined){
            continue;
        }
        buttons[i].addEventListener("click", function() {
            localStorage.setItem("category", this.innerText);
            goToQuizSelect();
        });
    }
}

function loadCategoryName(){
    header = document.getElementById("categoryLabel");
    category = localStorage.getItem("category");
    header.innerText = category;
    getQuizzes(category);
}

function getQuizzes(category){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = this.responseText;
            quizzes = JSON.parse(response);
            loadQuizzes(quizzes)
            }
        }
    xhttp.open("POST", "/getQuizzes", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({category: category}));
}

function loadQuizzes(quizzes){
    for (var i = 0; i < quizzes.length; i += 1) {
        var quiz = document.createElement("button")
        var id = quizzes[i].Quiz_ID;
        quiz.setAttribute('id',id);
        quiz.innerText = quizzes[i].Quiz_Title;
        quiz.addEventListener("click", function() {
            localStorage.setItem("quiz_ID", this.id);
            localStorage.setItem("quiz_Title", this.innerText);
            goToAnswerQuiz();
        });
        var parentDiv = document.getElementById("buttons");
        parentDiv.appendChild(quiz);
    }
}

function goBack() {
    window.location.replace("https://cow10-code50-88021628-g4r5q96q6cvp5p-8080.preview.app.github.dev/categories.html");
};
