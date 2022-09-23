var gateway = `ws://${window.location.hostname}/ws`;
var websocket;
window.addEventListener('load', onload);

function onload(event) {
    initWebSocket();
}

function getValues(){
    websocket.send("getValues");
}

function initWebSocket() {
    console.log('Trying to open a WebSocket connection…');
    websocket = new WebSocket(gateway);
    websocket.onopen = onOpen;
    websocket.onclose = onClose;
    websocket.onmessage = onMessage;
}

function onOpen(event) {
    console.log('Connection opened');
    getValues();
}

function onClose(event) {
    console.log('Connection closed');
    setTimeout(initWebSocket, 2000);
}

function updateSliderPWM(element) {
    var sliderNumber = element.id.charAt(element.id.length-1);
    var sliderValue = document.getElementById(element.id).value;
    document.getElementById("sliderValue"+sliderNumber).innerHTML = sliderValue;
    console.log(sliderValue);
    websocket.send(sliderNumber+"s"+sliderValue.toString());
}

function onMessage(event) {
    console.log(event.data);
    var myObj = JSON.parse(event.data);
    var keys = Object.keys(myObj);

    for (var i = 0; i < keys.length; i++){
        var key = keys[i];
        document.getElementById(key).innerHTML = myObj[key];
        document.getElementById("slider"+ (i+1).toString()).value = myObj[key];
    }
}

    //  Inisialisasi Button
    var sliderNumber = document.getElementById("slider1");
    var sliderValue = document.getElementById("sliderValue1");
    //  Button untuk Base Servo

    function bClick0(){
        sliderNumber = 1;
        sliderValue = 0;
        websocket.send(sliderNumber.value = sliderValue);
        websocket.send(sliderNumber+"s"+sliderValue.toString());
    }

    function bClick60(){
        sliderNumber = 1;
        sliderValue = 60;
        websocket.send(sliderNumber.value = sliderValue);
        websocket.send(sliderNumber+"s"+sliderValue.toString());
    }
    
    function bClick90(){
        sliderNumber = 1;
        sliderValue = 90;
        websocket.send(sliderNumber.value = sliderValue);
        websocket.send(sliderNumber+"s"+sliderValue.toString());
    }

    function bClick180(){
        sliderNumber = 1;
        sliderValue = 180;
        websocket.send(sliderNumber.value = sliderValue);
        websocket.send(sliderNumber+"s"+sliderValue.toString());
    }

    //  Button untuk Catridge Servo

    function b1Click0(){
        sliderNumber = 2;
        sliderValue = 0;
        websocket.send(sliderNumber.value = sliderValue);
        websocket.send(sliderNumber+"s"+sliderValue.toString());
    }

    function b1Click60(){
        sliderNumber = 2;
        sliderValue = 60;
        websocket.send(sliderNumber.value = sliderValue);
        websocket.send(sliderNumber+"s"+sliderValue.toString());
    }

    function b1Click120(){
        sliderNumber = 2;
        sliderValue = 120;
        websocket.send(sliderNumber.value = sliderValue);
        websocket.send(sliderNumber+"s"+sliderValue.toString());
    }

    //  Button untuk Launcher Servo

    function b2Click0(){
        sliderNumber = 3;
        sliderValue = 0;
        websocket.send(sliderNumber.value = sliderValue);
        websocket.send(sliderNumber+"s"+sliderValue.toString());
    }

    function b2Click60(){
        sliderNumber = 3;
        sliderValue = 60;
        websocket.send(sliderNumber.value = sliderValue);
        websocket.send(sliderNumber+"s"+sliderValue.toString());
    }

    function b2Click90(){
        sliderNumber = 3;
        sliderValue = 90;
        websocket.send(sliderNumber.value = sliderValue);
        websocket.send(sliderNumber+"s"+sliderValue.toString());
    }