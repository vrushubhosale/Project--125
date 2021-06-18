noseX=0;
noseY=0;
diffrence = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(700, 700)
    video.position(230, 100)
    
    canvas = createCanvas(550, 550);
    canvas.position(1100, 150);
    
    poseNet = ml5.poseNet(video, modelLoaded)
    
    poseNet.on('pose', gotPoses);
    }
    
    function modelLoaded(){
        console.log('Posenet Is Initialized!')
    }
    
    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX: "+ noseX + "noseY: "+ noseY);

            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            diffrence = leftWristX - rightWristX ; 
            console.log("leftWristX = "+ leftWristX +"rightWristX = "+ rightWristX +"diffrence = "+ diffrence)
        }
    }
    
    function draw(){
        background('#FFFF00')
        text("Hello World",20 , 350);
        textSize(diffrence)
    }