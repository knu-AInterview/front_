// page3.jsx
import React, { useEffect } from 'react';
import * as faceapi from './face-api.min.js';

function Page3() {
  useEffect(() => {
    const video = document.getElementById('video');

    Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
      // faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      // faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      // faceapi.nets.faceExpressionNet.loadFromUri('/models')
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models')
    ]).then(startWebcam).then(faceRecognition);

    function startWebcam() {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: false,
        })
        .then((stream) => {
          video.srcObject = stream;
        })
        .catch((error) => {
          console.error(error);
        });
    }
    async function faceRecognition() {
      video.addEventListener('play', () => {
        const canvas = faceapi.createCanvasFromMedia(video)
        document.body.append(canvas)
        const displaySize = { width: video.width, height: video.height }
        faceapi.matchDimensions(canvas, displaySize)
        setInterval(async () => {
          const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
          console.log(detections);
          const resizedDetections = faceapi.resizeResults(detections, displaySize)
          canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
          faceapi.draw.drawDetections(canvas, resizedDetections)
          // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
          faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
          
        }, 100)
      })
    }
  }, []);

  return (
    <div>
      <video id="video" width="600" height="450" autoPlay />
    </div>
  );
}

export default Page3;
