//From: https://www.w3schools.com/howto/howto_js_draggable.asp

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("mydiv2"));


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {

        let divHeight;
        let divTopPoint;
        let divWidth;
        let divLeftPoint;
        let windowHeight;
        let windowWidth;

        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        divHeight = parseInt(getComputedStyle(elmnt).getPropertyValue("height"));
        divTopPoint = parseInt(elmnt.style.top);

        divWidth = parseInt(getComputedStyle(elmnt).getPropertyValue("width"));
        divLeftPoint = parseInt(elmnt.style.left);

        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;

        if (elmnt.style.top < "0px") {
            elmnt.style.top = "0px";
        }

        if (elmnt.style.left < "0px") {
            elmnt.style.left = "0px";
        }

        if (`${divTopPoint + divHeight}px`  > `${windowHeight}px`){
           console.log('OUT OF BOUNDS')
           elmnt.style.top = `${windowHeight - divHeight}px`
        }

        if (`${divLeftPoint + divWidth}px` > `${windowWidth}px`){
            console.log('OUT OF BOUNDS')
            elmnt.style.left = `${windowWidth - divWidth}px`
        }

         // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    

  }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

console.log(typeof window.innerHeight);

