var answers = [];
function getQuestions(){
    id = localStorage.getItem("quiz_ID");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = this.responseText;
            questions = JSON.parse(response);
            loadQuestions(questions)
            }
        }
    xhttp.open("POST", "/getQuestions", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({id: id}));
}

function loadQuestions(questions){
    title = localStorage.getItem("quiz_Title");
    var questionTitleEl = document.createElement("h1");
    questionTitleEl.innerText = title;
    var divEl = document.getElementById("questionsDiv");
    divEl.appendChild(questionTitleEl);

    for (var i = 0; i < questions.length; i += 1) {
        answers.push(questions[i].Answer);
        formEl = document.createElement("form");
        questionNumEl = document.createElement("h4");
        questionNumEl.innerText = "Question " + (i+1);
        formEl.appendChild(questionNumEl);

        questionEl = document.createElement("p");
        questionEl.innerText = questions[i].Question;
        formEl.appendChild(questionEl);

        brEl = document.createElement("br");
        formEl.appendChild(brEl);

        selectEl = document.createElement("select");
        selectEl.setAttribute("id", i+1);

        var option = document.createElement("option");
        option.value = 1;
        option.text = questions[i].Option1;
        option.setAttribute("id", "option1");
        selectEl.appendChild(option);

        var option = document.createElement("option");
        option.value = 2;
        option.text = questions[i].Option2;
        option.setAttribute("id", "option2");
        selectEl.appendChild(option);


        var option = document.createElement("option");
        option.value = 3;
        option.text = questions[i].Option3;
        option.setAttribute("id", "option3");
        selectEl.appendChild(option);


        var option = document.createElement("option");
        option.value = 4;
        option.text = questions[i].Option4;
        option.setAttribute("id", "option4");
        selectEl.appendChild(option);

        formEl.appendChild(selectEl);

        brEl = document.createElement("br");
        formEl.appendChild(brEl);
        brEl = document.createElement("br");
        formEl.appendChild(brEl);
        brEl = document.createElement("br");
        formEl.appendChild(brEl);

        divEl.appendChild(formEl);

    }

    var submitEl = document.createElement("input");
    submitEl.setAttribute("type", "submit");
    submitEl.setAttribute("id", "submitQuestionButton");
    submitEl.setAttribute("value", "Submit Quiz");

    submitEl.addEventListener("click", function() {
        total = 0
        var q1 = document.getElementById("1");
        var selectedValue = q1.value;
        if (selectedValue == answers[0]){
            total += 1
            q1.style.backgroundColor = "#B3FF9B";
        }
        else{
            q1.style.backgroundColor = "#EA5344";
        }

        var q2 = document.getElementById("2");
        var selectedValue = q2.value;
        if (selectedValue == answers[1]){
            total += 1
            q2.style.backgroundColor = "#B3FF9B";
        }
        else{
            q2.style.backgroundColor = "#EA5344";
        }

        var q3 = document.getElementById("3");
        var selectedValue = q3.value;
        if (selectedValue == answers[2]){
            total += 1
            q3.style.backgroundColor = "#B3FF9B";
        }
        else{
            q3.style.backgroundColor = "#EA5344";
        }

        var q4 = document.getElementById("4");
        var selectedValue = q4.value;
        if (selectedValue == answers[3]){
            total += 1
            q4.style.backgroundColor = "#B3FF9B";
        }
        else{
            q4.style.backgroundColor = "#EA5344";
        }

        var q5 = document.getElementById("5");
        var selectedValue = q5.value;
        if (selectedValue == answers[4]){
            total += 1
            q5.style.backgroundColor = "#B3FF9B";
        }
        else{
            q5.style.backgroundColor = "#EA5344";
        }

        alert("Congratulations you got " + total + "/5");
    });

    divEl.appendChild(submitEl);
}

function goBack() {
    window.location.replace("https://cow10-code50-88021628-g4r5q96q6cvp5p-8080.preview.app.github.dev/quizSelect.html");
};