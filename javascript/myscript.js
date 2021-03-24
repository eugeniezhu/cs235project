var start = 0;
var end = 0;
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  function showList() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

  function showHue() {
    document.getElementById("myhue").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.huebtn')) {
      var dropdowns = document.getElementsByClassName("hue-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

  function showHue() {
    document.getElementById("myhue").classList.toggle("show");
  }  
  window.onclick = function(event) {
    if (!event.target.matches('.huebtn')) {
      var dropdowns = document.getElementsByClassName("hue-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

  function showShade() {
    document.getElementById("myshade").classList.toggle("show");
  }  
  window.onclick = function(event) {
    if (!event.target.matches('.shadebtn')) {
      var dropdowns = document.getElementsByClassName("shade-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

  function showSaturation() {
    document.getElementById("mysaturation").classList.toggle("show");
  }  
  window.onclick = function(event) {
    if (!event.target.matches('.saturationbtn')) {
      var dropdowns = document.getElementsByClassName("saturation-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

  function startExp(){
    //save user's device choice
    var d = document.getElementsByName('device');    
    for(i = 0; i < d.length; i++) {
      if(d[i].checked){
        var userDevice = d[i].value;
        sessionStorage.setItem("userD", userDevice);
      }     
    } 
    //start timer for control test
    startTime = new Date().getTime();
    sessionStorage.setItem("startTime", startTime);     
    window.location.href = "control.html";    
  }

  function hue(){
    //end timer for control test & calculate # of ms
    endTime = new Date().getTime();
    var controlTime = endTime - sessionStorage.getItem("startTime");
    sessionStorage.setItem("controlTime", controlTime);     

    window.location.href = "hue.html";

    //start timer for hue test
    startTime = new Date().getTime();
    sessionStorage.setItem("startTime", startTime); 
  }

  function shade(){
    //end timer for hue test & calculate # of ms
    endTime = new Date().getTime();
    var hueTime = endTime - sessionStorage.getItem("startTime");
    sessionStorage.setItem("hueTime", hueTime); 

    window.location.href = "shade.html";

    //start timer for shade test
    startTime = new Date().getTime();
    sessionStorage.setItem("startTime", startTime);
  }

  function saturation(){
    //end timer for shade test & calculate # of ms
    endTime = new Date().getTime();
    var shadeTime = endTime - sessionStorage.getItem("startTime");
    sessionStorage.setItem("shadeTime", shadeTime);

    window.location.href = "saturation.html"; 

    //start timer for saturation test
    startTime = new Date().getTime();
    sessionStorage.setItem("startTime", startTime);
  }
  
  function endExp(){    
    //end timer for saturation test & calculate # of ms
    endTime = new Date().getTime();
    var saturationTime = endTime - sessionStorage.getItem("startTime");
    sessionStorage.setItem("saturationTime", saturationTime);
    
    // for DEBUG -- how to get variables
    console.log("user's device: " + sessionStorage.getItem("userD"));
    console.log("user's controlTime: " + sessionStorage.getItem("controlTime") + " ms");
    console.log("user's hueTime: " + sessionStorage.getItem("hueTime") + " ms");
    console.log("user's shadeTime: " + sessionStorage.getItem("shadeTime") + " ms");
    console.log("user's saturationTime: " + sessionStorage.getItem("saturationTime") + " ms");
    
    alert("You've completed the experiment. Thank you so much for your time.");
  }