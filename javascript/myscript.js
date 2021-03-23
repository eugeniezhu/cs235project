/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showList() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
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
  
  // Close the dropdown menu if the user clicks outside of it
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
  
  // Close the dropdown menu if the user clicks outside of it
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
  
  // Close the dropdown menu if the user clicks outside of it
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
  
  // Close the dropdown menu if the user clicks outside of it
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
    //TODO: START TIMER HERE
    var userDevice = document.getElementsByName('device');
    //for DEBUG
    for(i = 0; i < userDevice.length; i++) {
      if(userDevice[i].checked)
        alert(userDevice[i].value);      
  }
    
    window.location.href = "control.html";    
  }

  function hue(){
    window.location.href = "hue.html";
  }

  function shade(){
    window.location.href = "shade.html";
  }

  function saturation(){
    window.location.href = "saturation.html";  
  }
  
  function endExp(){    
    //TODO END TIMER HERE
    alert("Great job, you've completed the experiment. Thank you for your time.");
  }