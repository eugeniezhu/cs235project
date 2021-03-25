// generic toggle menu
function toggleMenu(menuName) {
  document.getElementById(menuName).classList.toggle("show");
}

function startExp() {
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
  if (currentMenu != null) {
    endTimer(currentMenu);
  }
  window.location.href = nextMenu;
  startTimer();
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