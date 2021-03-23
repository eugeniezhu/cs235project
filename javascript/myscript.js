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

  function startExp(){
    //TODO: START TIMER HERE
    window.location.href = "control.html";
    
  }

  function hue(){
    window.location.href = "hue.html";
  }

  function shade(){
      //TODO
  }

  function saturation(){
      //TODO
  }
  
  function endExp(){    
    //TODO END TIMER HERE
  }