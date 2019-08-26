/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let parsedTime = new Date(`08/26/2019, ${time}`); 
  if (parsedTime >= new Date('08/26/2019 0:01') && parsedTime < new Date('08/26/2019 12:00')) {
      return "Good Morning";
  } else if (parsedTime >= new Date('08/26/2019 12:00') && parsedTime <= new Date('08/26/2019 17:00')) {
      return "Good Afternoon";
  } else {
      return "Good Evening"; 
  }
};

/* Write your implementation of displayMessage() */

function displayMessage(string){
  let node = document.getElementById("greeting");
  node.innerText = string; 
}; 
