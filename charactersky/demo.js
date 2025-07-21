var popupoverlay=document.querySelector(".popup-overlay")

var popupbox=document.querySelector(".popup-box")

var addpopupbutton=document.getElementById("add-popup-button")



addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


var container=document.querySelector(".container")

var addcharacter=document.getElementById("add-character")

var characternameinput=document.getElementById("character-name-input")

var charactercharacter1input=document.getElementById("character-character1-input")

var characterdescriptioninput=document.getElementById("character-description-input")

addcharacter.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","character-container")
    div.innerHTML=`<h2>${characternameinput.value}</h2>
    <h5>${charactercharacter1input.value}</h5>
    <p>${characterdescriptioninput.value}</p>
    <button onclick="deletecharacter(event)">Delete</button>`
    container.append(div)
    
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


function deletecharacter(event)
 {
    event.target.parentElement.remove()
 }

 
 



