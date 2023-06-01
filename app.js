let video = null;
let detector = null;
let detections = [];
let videoVisibility = true;
let detecting = false;
let personaDetectada = false;
let deteccionActiva = true;

const videoAction = document.getElementById('videoAction');
const detectionAction = document.getElementById('detectionAction');

document.body.style.cursor = 'wait';

function preload() {
  detector = ml5.objectDetector('cocossd');
}

function setup() {
    createCanvas(225, 360);
    video = createCapture(VIDEO);
    video.size(225, 360);
    video.parent('videoContainer');
  }
   

  (function() {
    function draw() {
      if (!video || !detecting) return;
      image(video, 0, 0, width, height); // Usar el tamaño del lienzo para mostrar el video
      for (let i = 0; i < detections.length; i++) {
        drawResult(detections[i]);
      }
      if (personaDetectada) {
        textSize(12); // Reducir el tamaño de la fuente
        fill('red');
        text('Persona detectada', 5, 15); // Ajustar las coordenadas de la posición del texto
      }
    }
  
    function drawResult(object) {
      boundingBox(object);
      drawLabel(object);
    }
  
    function boundingBox(object) {
      stroke('blue');
      strokeWeight(6);
      noFill();
      rect(object.x * 0.75, object.y * 0.75, object.width * 0.75, object.height * 0.75);
    }
  
    function drawLabel(object) {
      noStroke();
      fill('white');
      textSize(34);
      text(object.label, object.x * 0.75 + 15, object.y * 0.75 + 34);
    }
  })();

function onDetected(error, results) {
    if (error) {
      console.error(error);
      return;
    }
  
    detections = results;
  
    if (deteccionActiva) {
      for (let i = 0; i < detections.length; i++) {
        if (detections[i].label === 'person') {
          personaDetectada = true;
          deteccionActiva = false;
       reproducirAudio();

          break;
        }
      }
    }
  }

function detect() {
  detector.detect(video, onDetected);
}

function toggleVideo() {
  if (!video) return;
  if (videoVisibility) {
    video.hide();
    videoAction.innerText = 'Activar Video';
  } else {
    video.show();
    videoAction.innerText = 'Desactivar Video';
  }
  videoVisibility = !videoVisibility;
}

function toggleDetecting() {
  if (!video || !detector) return;
  if (!detecting) {
    detect();
    detectionAction.innerText = 'Parar...';
  } else {
    detectionAction.innerText = 'Detectar Objetos';
  }
  detecting = !detecting;
}

function reproducirAudio() {
    const audio = new Audio(
      "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/bienvenida.mp3?v=1684424798636"
    );
    audio.play();
  
    audio.onended = function () {
      iniciarEscuchaContinua();
    };
  }
  