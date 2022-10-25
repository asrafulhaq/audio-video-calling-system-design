// get elements 
const screen_01 = document.getElementById('s1');
const screen_02 = document.getElementById('s2');
const cambtn = document.getElementById('cambtn');
const camAudioBtn = document.getElementById('camAudioBtn');
const screenShare = document.getElementById('screenShare');
const screen_video_02 = document.querySelector('.screen-02');



let camStream ;
let screenStream ;

// sahre webcam 
const shareCam = () => {

    navigator.mediaDevices.getUserMedia({
        video : true,
        audio : true
    })
    .then( stream => {
        camStream = stream;
        screen_01.srcObject = stream;

    });
        

}

// sahre webcam 
const shareScreen = () => {

    navigator.mediaDevices.getDisplayMedia({
        video : true,
        audio : true
    })
    .then( stream => {
        screenStream = stream;
        screen_01.srcObject = stream;
        screen_02.srcObject = camStream;

    });
        

}

shareCam();



// cam video toggle
let camVideoStatus = true;
cambtn.onclick = (e) => {
    camVideoStatus = !camVideoStatus;
    camStream.getVideoTracks()[0].enabled = camVideoStatus;
    cambtn.classList.toggle('active');
}

// cam video toggle
let camAudioStatus = true;
camAudioBtn.onclick = (e) => {
    camAudioStatus = !camAudioStatus;
    camStream.getAudioTracks()[0].enabled = camAudioStatus;
    camAudioBtn.classList.toggle('active');
}



// share pc scrteen 
let screenStatus = false;
screenShare.onclick = () => {
    screenStatus = !screenStatus;

    if(screenStatus){
        screen_video_02.style.display = 'block';
        shareScreen();
    }else {
        screen_video_02.style.display = 'none';
        screenStream.getVideoTracks()[0].enabled = screenStatus;
        screen_01.srcObject = camStream;
    }
    
    screenShare.classList.toggle('active');
}