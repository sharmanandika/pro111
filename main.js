Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<>img id="capture_image" src="'+data_uri+'"> ';

    });
}
console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-xyK1TKsr/model.json",modelLoaded);
function modelLoaded(){
    console.log('model loaded');
}
prediction_1="";
prediction_2="";
function speak(){
    var synth=window.speechSynthesis;
    speak_data_one="the firsth prediction is-"+prediction_1;
    speak_data_two="and the second prediction is-"+prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speak_data_one+speak_data_two);
    synth.speak(utterthis);
}
