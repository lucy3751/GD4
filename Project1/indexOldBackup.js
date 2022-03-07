//Tutorial from: https://www.youtube.com/watch?v=8zcfIu3tyw4



const popups = document.querySelector(".popups");
const topBar = popups.querySelector(".topBar")

// when the mouse is pressed, ask if mouse is moving, if mouse is moving, execute the onDrag function
topBar.addEventListener("mousedown", () => {
    topBar.addEventListener("mousemove", onDrag);
})

// when the mouse is released, stop asking if mouse is moving, hence not execute the onDrag function
document.addEventListener("mouseup", () => {
    topBar.removeEventListener("mousemove", onDrag);
})


function onDrag({ movementX, movementY }) {
    //get the left and top value of the popup div <-- this gives a string instead of a number, which we have to convert it to a number (integer) using parseInt
    let popupLeft = parseInt(getComputedStyle(popups).getPropertyValue("left"));
    let popupTop = parseInt(getComputedStyle(popups).getPropertyValue("top"));

    //update the popup div position/css (with .style)
    //current left/top value + distance the mouseX/Y moved (from the last event)
    popups.style.left = `${popupLeft + movementX}px`;
    popups.style.top = `${popupTop + movementY}px`;

    if (popups.style.left < "0px") {
        popups.style.left = "0px";
    }

    if (popups.style.top < "0px") {
        popups.style.top = "0px";
    }

    // let popupBottomCornerY =

    // if (popups.style.top > `${window.innerHeight}px`){
    //     popups.style.top = `${window.innerHeight}px`
    //     console.log('OUT OF BOUNDS Y')
    // }
}


console.log("Project 1");
const workPopups = document.querySelector(".workPopup")
// console.log(getComputedStyle(workPopups).getPropertyValue("height"));




