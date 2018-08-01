//var listOfChosenAttributes =[];

function checkQ(idToCheck) {
    document.getElementById(idToCheck).checked = true;
    //listOfChosenAttributes.push(attributeName);
}

function submitQ1(){
  var x = document.getElementById("DIV1st&2ndQ");
  if(document.getElementById("option1Q1").checked == true || document.getElementById("option2Q1").checked == true || document.getElementById("option3Q1").checked == true || document.getElementById("option4Q1").checked == true || document.getElementById("option5Q1").checked == true){
      x.style.display = "inline";
    }
}

function submitQ2(){
  var y = document.getElementById("DIV2nd&3rdQ");
  if(document.getElementById("option1Q2").checked == true || document.getElementById("option2Q2").checked == true || document.getElementById("option3Q2").checked == true){
      y.style.display = "inline";
    }
}

function submitQ3(){
  var y = document.getElementById("DIV3rd&4thQ");
  if(document.getElementById("option1Q3").checked == true || document.getElementById("option2Q3").checked == true){
      y.style.display = "inline";
    }
}

function submitQ4(){
  var a = document.getElementById("DIV4th&5thQ");
  if(document.getElementById("option1Q4").checked == true || document.getElementById("option2Q4").checked == true || document.getElementById("option3Q4").checked == true || document.getElementById("option4Q4").checked == true){
      a.style.display = "inline";
    }
}

function submitQ5(){
  var b = document.getElementById("RESULTS");
      b.style.display = "inline";
}
