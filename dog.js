status="";  
function preload(){
    img=loadImage("Dog&cat.jpg");
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    object_detector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    object_detector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}