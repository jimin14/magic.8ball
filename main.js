document.getElementById("btn").addEventListener("click", BtnClicked);

function BtnClicked() {

let randNum = Math.random();
    console.log(randNum);

let number = document.getElementById("question-in").value;
    if (randNum < 0.2) {
        document.getElementById("output1").innerHTML = "Without a Doubt.";
      } else if (randNum < 0.4) { 
        document.getElementById("output1").innerHTML = "As I see it, yes.";
      } else if (randNum < 0.67){
        document.getElementById("output1").innerHTML ="Concentrate and ask again.";
      }else if (randNum < 0.84){
        document.getElementById("output1").innerHTML ="Don't count on it.";
      } else{
            document.getElementById("output1").innerHTML ="Outlook not so good.";
       }

    
    
    let question = document.getElementById("question-in").value
    if (question == "") {
        document.getElementById("output1").innerHTML ="Please ask a question...";
    }else if (question == "Does a magic 8 ball actually work?" ) {
      document.getElementById("output1").innerHTML ="How dare you doubt me!";
    } else if (question == "Is JavaScript awesome?" ) {
      document.getElementById("output1").innerHTML ="Of Course!";
    }
  }