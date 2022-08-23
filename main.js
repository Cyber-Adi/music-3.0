var m="";
var m2="";
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 550);
    canvas.positions(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function preload(){
    song= loadSound("music.mp3");
    song2= loadSound("music2.mp3");
}

rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;

function modelLoaded(){
    console.log('poseNet loaded!')
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = "+ scoreRightWrist + "scoreLeftWrist"+ scoreLeftWrist);

        rightWristX= result[0].pose.rightWrist.x;
        rightWristY=result[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX + "rightWristY = "+ rightWristY);
    }
}
