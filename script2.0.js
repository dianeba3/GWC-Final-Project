listOfColleges = [
["Midwest","Suburban","Private","15,000+","50,000+"," Northwestern University "],
["Midwest","Urban","Private","8,000-15,000","50,000+"," University of Chicago "],
["Midwest","Rural","Public","15,000+","30,000-50,000"," University of Illinois "],
["Midwest","Urban","Private","8,000-15,000","50,000+"," University of Notre Dame "],
["Midwest","Rural","Public","0-2,000","10,000-30,000"," Ohio Northern University "],
["Midwest","Urban","Private","2,000-8,000","30,000-50,000"," Washington University in St.Louis "],
["Midwest","Suburban","Private","2,000-8,000","50,000+"," Oberlin College "],
["Midwest","Urban","Public","15,000+","30,000-50,000"," University of Michigan "],
["Midwest","Rural","Private","0-2,000","50,000+"," Grinnell College "],
["Midwest","Urban","Public","15,000+","10,000-30,000"," Iowa State University "],
["Northeast","Urban","Private","2,000-8,000","30,000-50,000"," Harvard University "],
["Northeast","Urban","Private","2,000-8,000","30,000-50,000"," Massachusetts Institute of Technology "],
["Northeast","Urban","Private","8,000-15,000","30,000-50,000"," University of Pennsylvania "],
["Northeast","Urban","Private","2,000-8,000","50,000+"," Columbia University "],
["Northeast","Rural","Private","8,000-15,000","50,000+"," Cornell University "],
["Northeast","Suburban","Private","2,000-8,000","30,000-50,000"," Princeton University "],
["Northeast","Urban","Private","2,000-8,000","30,000-50,000"," Yale University "],
["Northeast","Rural","Private","2,000-8,000","30,000-50,000"," Dartmouth College "],
["Northeast","Urban","Private","2,000-8,000","30,000-50,000"," Brown University "],
["Northeast","Rural","Private","0-2,000","50,000+"," Williams College "],
["Southeast","Urban","Private","2,000-8,000","30,000-50,000"," Duke University "],
["Southeast","Urban","Private","2,000-8,000","30,000-50,000"," Vanderbilt University "],
["Southeast","Suburban","Public","15,000+","30,000-50,000"," University of Virginia "],
["Southeast","Suburban","Public","15,000+","30,000-50,000"," University of North Carolina at Chapel Hill "],
["Southeast","Suburban","Public","15,000+","10,000-30,000"," University of Florida "],
["Southeast","Urban","Public","15,000+","30,000-50,000"," Georgia Institute of Technology "],
["Southeast","Urban","Public","15,000+","10,000-30,000"," North Carolina State University "],
["Southeast","Urban","Public","8,000-15,000","30,000-50,000"," College of William and Mary "],
["Southeast","Urban","Private","0-2,000","30,000-50,000"," Agnes Scott College "],
["Southeast","Rural","Public","15,000+","10,000-30,000"," James Madison University "],
["Southwest","Urban","Private","2,000-8,000","30,000-50,000"," University of Denver "],
["Southwest","Urban","Public","15,000+","30,000-50,000"," University of Texas at Austin "],
["Southwest","Urban","Private","2,000-8,000","30,000-50,000"," Rice University "],
["Southwest","Suburban","Public","15,000+","30,000-50,000"," University of Colorado Boulder "],
["Southwest","Suburban","Public","15,000+","10,000-30,000"," Arizona State University "],
["Southwest","Urban","Private","8,000-15,000","30,000-50,000"," Baylor University "],
["Southwest","Suburban","Public","15,000+","10,000-30,000"," University of Oklahoma "],
["Southwest","Urban","Public","15,000+","10,000-30,000"," University of Nevada at Reno "],
["Southwest","Suburban","Private","15,000+","0-10,000"," Brigham Young University "],
["Southwest","Rural","Private","0-2,000","30,000-50,000"," Southwestern University "],
["WestCoast","Suburban","Private","2,000-8,000","30,000-50,000"," Stanford University "],
["WestCoast","Urban","Public","15,000+","30,000-50,000"," University of California at Berkeley "],
["WestCoast","Suburban","Public","15,000+","30,000-50,000"," University of California at Davis "],
["WestCoast","Urban","Public","15,000+","30,000-50,000"," University of California at LA "],
["WestCoast","Urban","Private","15,000+","30,000-50,000"," University of Southern California "],
["WestCoast","Suburban","Public","15,000+","30,000-50,000"," University of California at Santa Barbara "],
["WestCoast","Suburban","Public","2,000-8,000","50,000+"," Santa Clara University "],
["WestCoast","Suburban","Private","0-2,000","30,000-50,000"," California Institute of Technology "],
["WestCoast","Urban","Public","15,000+","30,000-50,000"," University of California at San Diego "],
["WestCoast","Urban","Public","15,000+","30,000-50,000"," University of Washington "]
];


var listOfChosenAttributes =[];

function checkQ(idToCheck, attributeName){
    document.getElementById(idToCheck).checked = true;
    listOfChosenAttributes.push(attributeName);
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
  //document.write(listOfChosenAttributes);
  var listOfSelectedColleges = [];
  var region = listOfChosenAttributes[0];
  var setting = listOfChosenAttributes[1];
  var type1 = listOfChosenAttributes[2];
  var pop = listOfChosenAttributes[3];
  var tuition = listOfChosenAttributes[4];

  for (i = 0; i <= 50; i++){
    if(listOfColleges[i] !== undefined && region === listOfColleges[i][0]){
        listOfSelectedColleges.push(listOfColleges[i][5]);
    }
  }
  for (j = 0; j <= listOfColleges.length; j++){
    if(listOfColleges[j] !== undefined && region === listOfColleges[j][0] && setting === listOfColleges[j][1]){
      listOfSelectedColleges.push(listOfColleges[j][5]);
    }
  }
  for (r = 0; r <= listOfColleges.length; r++){
    if(listOfColleges[r] !== undefined && region === listOfColleges[r][0] && setting === listOfColleges[r][1] && type1 === listOfColleges[r][2]){
      listOfSelectedColleges.push(listOfColleges[r][5]);
    }
  }
  for (n = 0; n <= listOfColleges.length; n++){
    if(listOfColleges[n] !== undefined && region === listOfColleges[n][0] && setting === listOfColleges[n][1] && type1 === listOfColleges[n][2] && pop === listOfColleges[n][3]){
      listOfSelectedColleges.push(listOfColleges[n][5]);
    }
  }
  for (m = 0; m <= listOfColleges.length; m++){
    if(listOfColleges[m] !== undefined && region === listOfColleges[m][0] && setting === listOfColleges[m][1] && type1 === listOfColleges[m][2] && pop === listOfColleges[m][3] && tuition === listOfColleges[m][4]){
      listOfSelectedColleges.push(listOfColleges[m][5]);
    }
  }
  document.getElementById("placeHolderForResults").innerHTML = listOfSelectedColleges;
    var b = document.getElementById("RESULTS");
        b.style.display = "inline";
}
  //document.write(listOfColleges[0][0]);














/*var	NorthwesternUniversity	=	["Midwest","Suburban","Private","15,000+","50,000+"];
var	UniversityofChicago	=	["Midwest","Urban","Private","8,000-15,000","50,000+"];
var	UniversityofIllinois =	["Midwest","Rural","Public","15,000+","30,000-50,000"];
var	UniversityofNotreDame	=	["Midwest","Urban","Private","8,000-15,000","50,000+"];
var	OhioNorthernUniversity =	["Midwest","Rural","Public","0-2,000","10,000-30,000"];
var	WashingtonUniversityinStLouis	=	["Midwest","Urban","Private","2,000-8,000","30,000-50,000"];
var	OberlinCollege	=	["Midwest","Suburban","Private","2,000-8,000","50,000+"];
var	UniversityofMichigan	=	["Midwest","Urban","Public","15,000+","30,000-50,000"];
var	GrinnellCollege	=	["Midwest","Rural","Private","0-2,000","50,000+"];
var	IowaStateUniversity	=	["Midwest","Urban","Public","15,000+","10,000-30,000"];





listOfColleges = [
NorthwesternUniversity	=	["Midwest","Suburban","Private","15,000+","50,000+"],
UniversityofChicago	=	["Midwest","Urban","Private","8,000-15,000","50,000+"],
UniversityofIllinois =	["Midwest","Rural","Public","15,000+","30,000-50,000"],
UniversityofNotreDame	=	["Midwest","Urban","Private","8,000-15,000","50,000+"],
OhioNorthernUniversity =	["Midwest","Rural","Public","0-2,000","10,000-30,000"],
WashingtonUniversityinStLouis	=	["Midwest","Urban","Private","2,000-8,000","30,000-50,000"],
OberlinCollege	=	["Midwest","Suburban","Private","2,000-8,000","50,000+"],
UniversityofMichigan	=	["Midwest","Urban","Public","15,000+","30,000-50,000"],
GrinnellCollege	=	["Midwest","Rural","Private","0-2,000","50,000+"],
IowaStateUniversity	=	["Midwest","Urban","Public","15,000+","10,000-30,000"],
HarvardUniversity	=	["Northeast","Urban","Private","2,000-8,000","30,000-50,000"],
MassachusettsInstituteofTechnology =	["Northeast","Urban","Private","2,000-8,000","30,000-50,000"],
UniversityofPennsylvania =	["Northeast","Urban","Private","8,000-15,000","30,000-50,000"],
ColumbiaUniversity =	["Northeast","Urban","Private","2,000-8,000","50,000+"],
CornellUniversity	=	["Northeast","Rural","Private","8,000-15,000","50,000+"],
PrincetonUniversity	=	["Northeast","Suburban","Private","2,000-8,000","30,000-50,000"],
YaleUniversity =	["Northeast","Urban","Private","2,000-8,000","30,000-50,000"],
DartmouthCollege =	["Northeast","Rural","Private","2,000-8,000","30,000-50,000"],
BrownUniversity	=	["Northeast","Urban","Private","2,000-8,000","30,000-50,000"],
WilliamsCollege	=	["Northeast","Rural","Private","0-2,000","50,000+"],
DukeUniversity	=	["Southeast","Urban","Private","2,000-8,000","30,000-50,000"],
VanderbiltUniversity =	["Southeast","Urban","Private","2,000-8,000","30,000-50,000"],
UniversityofVirginia =	["Southeast","Suburban","Public","15,000+","30,000-50,000"],
UniversityofNorthCarolinaatChapelHill	=	["Southeast","Suburban","Public","15,000+","30,000-50,000"],
UniversityofFlorida	=	["Southeast","Suburban","Public","15,000+","10,000-30,000"],
GeorgiaInstituteofTechnology =	["Southeast","Urban","Public","15,000+","30,000-50,000"],
NorthCarolinaStateUniversity =	["Southeast","Urban","Public","15,000+","10,000-30,000"],
CollegeofWilliamandMary	=	["Southeast","Urban","Public","8,000-15,000","30,000-50,000"],
AgnesScottCollege	=	["Southeast","Urban","Private","0-2,000","30,000-50,000"],
JamesMadisonUniversity =	["Southeast","Rural","Public","15,000+","10,000-30,000"],
UniversityofDenver =	["Southwest","Urban","Private","2,000-8,000","30,000-50,000"],
UniversityofTexasatAustin	=	["Southwest","Urban","Public","15,000+","30,000-50,000"],
RiceUniversity =	["Southwest","Urban","Private","2,000-8,000","30,000-50,000"],
UniversityofColoradoBoulder =	["Southwest","Suburban","Public","15,000+","30,000-50,000"],
ArizonaStateUniversity =	["Southwest","Suburban","Public","15,000+","10,000-30,000"],
BaylorUniversity =	["Southwest","Urban","Private","8,000-15,000","30,000-50,000"],
UniversityofOklahoma =	["Southwest","Suburban","Public","15,000+","10,000-30,000"],
UniversityofNevadaatReno =	["Southwest","Urban","Public","15,000+","10,000-30,000"],
BrighamYoungUniversity =	["Southwest","Suburban","Private","15,000+","0-10,000"],
SouthwesternUniversity =	["Southwest","Rural","Private","0-2,000","30,000-50,000"],
StanfordUniversity =	["WestCoast","Suburban","Private","2,000-8,000","30,000-50,000"],
UniversityofCaliforniaatBerkeley =	["WestCoast","Urban","Public","15,000+","30,000-50,000"],
UniversityofCaliforniaatDavis	=	["WestCoast","Suburban","Public","15,000+","30,000-50,000"],
UniversityofCaliforniaatLA =	["WestCoast","Urban","Public","15,000+","30,000-50,000"],
UniversityofSouthernCalifornia =	["WestCoast","Urban","Private","15,000+","30,000-50,000"],
UniversityofCaliforniaatSantaBarbara =	["WestCoast","Suburban","Public","15,000+","30,000-50,000"],
SantaClaraUniversity =	["WestCoast","Suburban","Public","2,000-8,000","50,000+"],
CaliforniaInstituteofTechnology	=	["WestCoast","Suburban","Private","0-2,000","30,000-50,000"],
UniversityofCaliforniaatSanDiego =	["WestCoast","Urban","Public","15,000+","30,000-50,000"],
UniversityofWashington =	["WestCoast","Urban","Public","15,000+","30,000-50,000"]
]
*/
