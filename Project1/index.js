//From: https://www.w3schools.com/howto/howto_js_draggable.asp and https://www.youtube.com/watch?v=8zcfIu3tyw4 


for (i=1; i <=25; i++){
    dragElement(document.getElementById(`mydiv${i}`));
}


function dragElement(elmnt) {

    elmnt.onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        // when mouse is not pressed:
        document.onmouseup = closeDragElement;

        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;

        // the active div popups (top layer)        
        for (i=1; i <=25; i++){
            document.getElementById(`mydiv${i}`).style.zIndex = 1;
        }
        elmnt.style.zIndex = 10;
    }

    function elementDrag(e) {
        console.log("hello")

        e = e || window.event;
        e.preventDefault();

        //get the left and top value of the popup div <-- this gives a string instead of a number, which we have to convert it to a number (integer) using parseInt
        let elmntLeft = parseInt(getComputedStyle(elmnt).getPropertyValue("left"));
        let elmntTop = parseInt(getComputedStyle(elmnt).getPropertyValue("top"));

        //update the popup div position/css (with .style)
        //current left/top value + distance the mouseX/Y moved (from the last event)
        elmnt.style.left = `${elmntLeft + e.movementX}px`;
        elmnt.style.top = `${elmntTop + e.movementY}px`;
        

        let divHeight = parseInt(getComputedStyle(elmnt).getPropertyValue("height"));
        let divTopPoint = parseInt(elmnt.style.top);

        let divWidth = parseInt(getComputedStyle(elmnt).getPropertyValue("width"));
        let divLeftPoint = parseInt(elmnt.style.left);

        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;


        // restrict the popup so that it cannot move out of the window
        if(divTopPoint<0){
            elmnt.style.top = `0px`;
        }

        // if(divTopPoint+divHeight > windowHeight){
        //     elmnt.style.top = `${windowHeight-divHeight}px`;
        // }

        if(divLeftPoint<0){
            elmnt.style.left = `0px`;
        }
        if(divLeftPoint+divWidth > windowWidth){
            elmnt.style.left = `${windowWidth-divWidth}px`;
        }

    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

console.log("Project 1")
