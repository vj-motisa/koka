koka = "";
wala = "";

function setup() {
    canvas = createCanvas(550, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(545, 345);
    video.hide();
}


function yasui() {
    objda = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("momo").innerHTML = "Status: Detecting Objects";
    
   koka = document.getElementById("input").value;

}

function modelLoaded() {
    console.log("fuhrsl5hiot");
    wala = true;
}