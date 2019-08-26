/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

// "8:40")).to.equal('Good Morning')
//     })
//     it("Returns Good Afternoon between 12pm and 5pm ", () => {
//       expect(greet("14:21"

// var string = '19:42';
// var integer = parseInt(string, 10);

//       console.log(integer)


function greet(string){
  let hour = parseInt(string, 10)
  if (hour < 12){
    return "Good Morning"
  } else if (hour>12 && hour<17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(string){
  let greeting = document.getElementById('greeting')
  greeting.innerText = string
}

