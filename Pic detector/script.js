function record1(){
    
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    
    recognition.onresult = function(event) {
        console.log(event);
        document.getElementById('speechToText1').value = event.results[0][0].transcript;
    }
    recognition.start();
    
}

function record2(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    
    recognition.onresult = function(event) {
        console.log(event);
        document.getElementById('speechToText2').value = event.results[0][0].transcript;
    }
    recognition.start();
}

function record3(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    
    recognition.onresult = function(event) {
        console.log(event);
        document.getElementById('speechToText3').value = event.results[0][0].transcript;
    }
    recognition.start();
}

function record4(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    
    recognition.onresult = function(event) {
        console.log(event);
        document.getElementById('speechToText4').value = event.results[0][0].transcript;
    }
    recognition.start();
}

function record5(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    
    recognition.onresult = function(event) {
        console.log(event);
        document.getElementById('speechToText5').value = event.results[0][0].transcript;
    }
    recognition.start();
}