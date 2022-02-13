function setup(){
    video=createCapture(VIDEO);
    video.size(450,500);
    canvas=createCanvas(400,450);
    canvas.position(470,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results) {
if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log(leftWristX,rightWristX);
}
}
function draw(){
    background("#FF0000");
    document.getElementById("font_size").innerHTML="Font Size Of Text Will Be"+difference+"px";
    textSize(difference);
    fill("#808080");
    text("alex",50,400);
    }



