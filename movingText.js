// Have text appear in middle of screen and get larger and bolder as it moves to its own spot in the About Me box


let movingTextEl = document.getElementById("moving-text");
let textContainerEl = document.getElementById("text-container");
let str1 = document.getElementById("musician");
let aboutMe = document.getElementById("about-me");
// alert(`Font size: ${str1.style.fontSize}   xPos: ${str1.style.left}`);


function createDescriptionEl (text) {
    let newEl = document.createElement('h4');
    textContainerEl.appendChild(newEl);
    let newElText = document.createTextNode(text);
    newEl.appendChild(newElText);
    newEl.style.color = "rgb(0, 0, 0)";
    return newEl;
}

function stopMovement (ofThis) {
    clearInterval(ofThis);
}

// This function moves an element to a new position (x,y array) in
//increments of deltaTime(in ms) over the specified timeSpan(in ms)
function moveObject(el, moveToPos, timeSpan, deltaTime) {
    //Get size of parent
    // let parentHeight = el.parentNode.offsetHeight;
    // let parentWidth = el.parentNode.offsetWidth;
    // alert(`${parentHeight}, ${parentWidth}`);
    //Get position or text container
    
    // let initPosX = parseFloat(window.getComputedStyle(textContainerEl, null).getPropertyValue('left'));
    // let initPosY = parseFloat(window.getComputedStyle(textContainerEl, null).getPropertyValue('top'));

    //Get position of element
    let posX = parseFloat(window.getComputedStyle(el, null).getPropertyValue('left'));
    let posY = parseFloat(window.getComputedStyle(el, null).getPropertyValue('top'));
    
    //Relative position
    let deltaX = moveToPos[0];
    let deltaY = moveToPos[1];

    // //Find deltaX and deltaY
    // let deltaX = moveToPos[0] - posX;
    // let deltaY = moveToPos[1] - posY;

    //Find rate of movement in each direction
    let numMoves = Math.floor(timeSpan / deltaTime) + 1;
    let pixelsPerTimeX = deltaX / numMoves;
    let pixelsPerTimeY = deltaY / numMoves;

    let timeLapsed = 0;     //Initialize timer
    //let logEl = document.getElementById('debug-log');
   
    // alert(`posX: ${posX},  posY: ${posY}\ndeltaX: ${deltaX},  deltaY: ${deltaY}\npixelsPerTimeX: ${pixelsPerTimeX},  pixelsPerTimeY: ${pixelsPerTimeY}`);
        let letsGo = window.setInterval(()=> {
        
            if (timeLapsed >= timeSpan) {
                stopMovement(letsGo);
            }

            //change position
            posX +=pixelsPerTimeX;
            posY +=pixelsPerTimeY;

            //Stop movement when deltaTime has been reached

            el.style.left = posX +'px';
            el.style.top = posY +'px';
            timeLapsed += deltaTime;
            
        }, deltaTime);
}



function makeTextAppear (el, timeDelta) {
    //let logEl = document.getElementById('debug-log');
    // Set element in center of box
    // el.style.top = "50%";
    // el.style.left = "35%";
    //el.style.alignText = "center";
    el.style.fontSize = "8px";
    
    let size = el.style.fontSize;
    el.style.fontWeight = "100";
    let weightInt = parseFloat(el.style.fontWeight);
    // let size = window.getComputedStyle(el, null).getPropertyValue('font-size');
    let newText = "";
    
        let growWord = window.setInterval(()=> {
            // let para = document.createElement("p");
            // logEl.appendChild(para);
            // newText = "position: " + posX + "px, " + posY +"px" + " font-size: " + size;
            // let paraText = document.createTextNode(newText);
            // para.appendChild(paraText);

            if (weightInt == 600) {
                stopMovement(growWord);
            }
            size = (parseFloat(size) + 3) + 'px';
            weightInt +=100;
            el.style.fontWeight = weightInt; 
            el.style.fontSize = size;
        }, timeDelta);
}


moveObject(aboutMe, [0, -200], 2000, 5);
let musicianEl = createDescriptionEl("musician");
makeTextAppear(musicianEl, 1000);
moveObject(musicianEl, [280, 180], 2000, 5);

let musicEducatorEl = createDescriptionEl("early childhood music eduator");
makeTextAppear(musicEducatorEl, 1000);
moveObject(musicEducatorEl, [-100, -90], 2000, 5);

let birdWatcherEl = createDescriptionEl("bird watcher");
makeTextAppear(birdWatcherEl, 1000);
moveObject(birdWatcherEl, [-200, 160], 2000, 5);

let studentEl = createDescriptionEl("student studying stack engineering");
makeTextAppear(studentEl, 1000);
moveObject(studentEl, [20, 20], 2000, 5);

let gardenerEl = createDescriptionEl("gardener");
makeTextAppear(gardenerEl, 1000);
moveObject(gardenerEl, [-280, -90], 2000, 5);

let natureEl = createDescriptionEl("nature enthusiast");
makeTextAppear(natureEl, 1000);
moveObject(natureEl, [250, -150], 2000, 5);

