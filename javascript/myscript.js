// generic toggle menu
function showMenu(menuName) {
  document.getElementById(menuName).classList.toggle("show");
}

function startExp(){
  var userName = document.getElementById('userName').value;
  sessionStorage.setItem("userN", userName)

  //save user's device choice
  var d = document.getElementsByName('device');    
  for(i = 0; i < d.length; i++) {
    if(d[i].checked){
      var userDevice = d[i].value;
      sessionStorage.setItem("userD", userDevice);
    }     
  }
  //start timer for control test
  startTimer();   
  window.location.href = "control.html";    
}

function showNextPage(currentMenu, nextMenu) {
  endTimer(currentMenu);
  window.location.href = nextMenu;
  startTimer();
}

function endExp(currentMenu){    
  endTimer(currentMenu)
  
  // for DEBUG -- how to get variables
  console.log("user's name: " + sessionStorage.getItem("userN"));
  console.log("user's device: " + sessionStorage.getItem("userD"));
  console.log("user's controlTime: " + sessionStorage.getItem("controlTime") + " ms");
  console.log("user's hueTime: " + sessionStorage.getItem("hueTime") + " ms");
  console.log("user's shadeTime: " + sessionStorage.getItem("shadeTime") + " ms");
  console.log("user's saturationTime: " + sessionStorage.getItem("saturationTime") + " ms");
  
  alert("You've completed the experiment. Thank you so much for your time.");
}

function startTimer() {
 startTime = new Date().getTime();
 sessionStorage.setItem("startTime", startTime); 
}

// end timer for current test & calculate # of ms
function endTimer(currentMenu) {
  endTime = new Date().getTime();
  sessionStorage.setItem(currentMenu, endTime - sessionStorage.getItem("startTime"));     
}