let questions = [
    {
      id: 1,
      question: "What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    }
  ];
  
  let question_count = 0;
  let points = 0;
  sessionStorage.setItem("points",points);
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
    let user_answer = document.querySelector("li.opt.active").innerHTML; 
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
        f=1;
      }
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
    
    
    
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="optgrp">
    <li class="opt">${first}</li>
    <li class="opt">${second}</li>
    <li class="opt">${third}</li>
    <li class="opt">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.opt");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
}
function submitform(e)
{
    e.preventDefault();
    let name=document.forms["welcform"]["name"].value;
    //sessional storage of player name
    sessionStorage.setItem("name",name)
    location.href="quiz.html";
    console.log(name);
}