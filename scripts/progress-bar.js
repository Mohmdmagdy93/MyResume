
let progressBar = []

function createProgressBar (i){
progressBar[i] = document.createElement("span");
progressBar[i].appendChild(document.createElement("span"));
progressBar[i].classList.add("progress-bar");
}


let gauge = document.querySelectorAll(".gauge");

let percentage = [];

function setProgressBar(i) {
    percentage[i] = parseInt(gauge[i].getAttribute("data-percentage"));
    let progressBarFill = document.querySelectorAll(".progress-bar span");
    for(let i=0; i<progressBarFill.length; i++){
        progressBarFill[i].style.width = percentage[i] + "%";
    }
}
for(let i=0; i<gauge.length; i++){
    createProgressBar(i);
    gauge[i].appendChild(progressBar[i]);
    setProgressBar(i);
}


