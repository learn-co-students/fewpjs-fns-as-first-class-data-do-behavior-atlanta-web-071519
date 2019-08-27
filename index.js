/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str) {
  let x = str.split(":"); 
  let y = parseInt(x[0], 10); 

  if(y < 12) {
    return "Good Morning"; 
  } else if(y > 17) {
    return "Good Evening"; 
  } else {
    return "Good Afternoon"; 
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(str) {
  let x = document.getElementById('greeting'); 
  x.innerText = str; 
}
