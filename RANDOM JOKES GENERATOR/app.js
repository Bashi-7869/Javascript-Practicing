// const jokesPlay = [

//     "joke: 90% of programmer errors come from data from other programmers",
  
//     "Why do programmers hate nature? It has too many bugs.",
  
//     "Programmers: See one warning, fixes warning.Compiles...See two errors, fixes errors, CompilesSee 83 errors, pitches computer",
  
//     "If at first you do not succeed, call it version 1.0",
  
//     "I would love to change the world, but they won't give me the source code",
  
//     "Why did the programmer go broke buying bitcoins? He kept forgetting his password.",
  
//     "How many programmers does it take to change a light bulb? None. It’s a hardware problem",
  
//     "What is hardware? (According to coders), It’s part of a computer that can kick you",
  
//     "Why did the programmer go to the doctor? He had a code fever.",
  
//     "What is software? (According to developers), It’s part of a computer you can’t hit",
  
//     "What happened to your funny programming jokes?  asks the CTO., “They’re still loading,” replied the junior developer",
  
//     "Eight bytes walk into a bar. The bartender asks, “Can I get you anything?”, “Yes,” reply the bytes. “Make us a double",
  
//     "What is debugging?  Removing the needles from the haystack"
  
//   ]
   
 
// let button = document.getElementById('nextJoke');
// let output = document.getElementById('text-output');

//   // adding eventlistener
// button.addEventListener("click", jokesHandler);

// function jokesHandler() {                         
//   let jokes = Math.floor(Math.random() * (jokesPlay.length));  // processing data

//   output.innerHTML = jokesPlay[jokes]   // showing output to user
// }
  


let button = document.getElementById('nextJoke');
let output = document.getElementById('text-output');

const serverUrl = "https://v2.jokeapi.dev/joke/Programming?type=single"


button.addEventListener("click", clickHandler)

function clickHandler(){
    fetch(serverUrl)
   .then(response => response.json())
   .then(json => { let displayJoke = json.joke;
           
    output.innerHTML = displayJoke
      
    })
}