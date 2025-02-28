// selecting node // accessing the element
document.addEventListener("DOMContentLoaded", function () {

    let heading = document.getElementById("heading")

console.log(heading)

// manipulating nodes
//changing content(Text node). text content
//heading.textContent = "MY NEW HEADING"

// listening for click event on the nav link

const myList = document.getElementById("myList")

myList.addEventListener("click", function(event){

    heading.textContent = "Menu clicked, please wait"

    heading.setAttribute("class", "classdynamic")

    //styling directly
    document.body.style.background ="red"

    //creating an element . creat element

    let newButton  = document.createElement("button")
    newButton.textContent = "click me"
    //document.body.appendChild(newButton)
    let sectionArticle = document.getElementById("article")
    sectionArticle.appendChild(newButton)
    // removing elements .removechild

    let headerSection = document.getElementById("header")

    document.body.removeChild(headerSection)
})

})

