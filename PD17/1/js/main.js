let button = document.createElement("button");
button.innerText = "click";
button.addEventListener("click", function (){
    alert("Sveiki atvyke i Javascript pasauli");
});

document.getElementById("button").appendChild(button);