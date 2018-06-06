/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app = (function () {
    "use strict"

    function AboutContent() {

        let paragraph = document.getElementById("paragraph");

        let mySentence = "";

        paragraph.textContent = mySentence;

        let myFavThings =[
            "Coding",
            "Anime",
            "Game",
            "Loud"
        ];
        let myFavThingsList = document.getElementById("myFavouriteThings");

        myFavThings.forEach(thing => {
            let listItem = document.createElement("li");
            listItem.textContent = thing;
            myFavThingsList.appendChild(listItem);
        });
    }

    function Start() {

        let title = document.title;

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);
        

        switch (title) {
            case "COMP125 - Home":
                HomeContent();
                break;

            case "COMP125 - About":
                AboutContent();
                break;

            default:
                break;
        }
    }


    //window.onload = Start;

    window.addEventListener("load", Start);

    
    return {
        title: document.title

    };
    
})();