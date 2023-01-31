var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    elementID = document.getElementById("mainStyleSheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    currStyle = elementID.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    if (currStyle == "light.css") {
        elementID.setAttribute("href", "dark.css");
        currStyle = "dark.css";
    } else {
        elementID.setAttribute("href", "light.css");
        currStyle = "light.css";
    }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("styleSheet", currStyle);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
    document.getElementById("mainStyleSheet").setAttribute("href", localStorage.getItem("styleSheet"));
    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)

    // 2 (b) get html style element by ID

    // 2 (c) replace href attribute of html element.
    
}


