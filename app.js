// ========FOR IMAGE======== 

var anchor = document.createElement("a");
var image = document.createElement("img");
anchor.appendChild(image);


image.setAttribute("src" , "https://www.drivespark.com/images/2022-06/2022-bmw-x1-8.jpg");


image.setAttribute("onclick" , "google()")

console.log(anchor)

var main = document.getElementById("main");

main.appendChild(anchor);

function google()
{
  anchor.setAttribute("href" , "https://github.com/musman-js")
}



// ========FOR FORM======= //

var input = document.createElement("input")
input.setAttribute("type" , "text");
input.setAttribute("id" , "userinput")
var button = document.createElement("button")
button.setAttribute("onclick" , "userInputToConsole()");
let buttonname = document.createTextNode("Submit")
// console.log(button);
button.appendChild(buttonname)

// console.log(input)
var main = document.getElementById("main");
main.appendChild(input)
main.appendChild(button)

function userInputToConsole()
{
    var userinput = document.getElementById("userinput");
    console.log(userinput.value);
}
