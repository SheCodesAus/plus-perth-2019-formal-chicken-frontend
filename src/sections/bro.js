
//not being used at the moment
import React from 'react';

export function bro(){
return(
<>

<button id="bro">I'm a bro with a gift to go</button>
<button id="sista">I'm a sista ready to regifta</button>
<p>
    <span id="output">Welcome!</span>
</p>

document.getElementById("bro").onclick = function(){
document.getElementById("output").style.color = 'blue'}

document.getElementById("sista").onclick = function(){
document.getElementById("output").style.color = 'red'} 

</>
)
}