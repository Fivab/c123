noseX=0;
noseY=0;
difference=0
leftWristX=0
rightWristX=0

function setup() {
    video=createCapture(VIDEO);
    video.size(400,400);
    canvas=createCanvas(450, 450);
    canvas.position(560, 100);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=leftWristX-rightWristX;
        console.log("left wrist x = " + leftWristX);
        console.log("right wrist x = " + rightWristX);
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        console.log("difference = " + difference);
    }
}

function draw() {
    background("#7f8082");
    fill("#4c3ac9");
    stroke("#000000");
    square(noseX, noseY, difference);
    document.getElementById("sqaure_sides").innerHTML="width and height of the square will be=" + difference + "pixels";
}