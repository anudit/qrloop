let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
  scanner.addListener('scan', function (content) {
    document.getElementById('data').appendChild(document.createTextNode(content));
    console.log(content);
  });
  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length >=  2) {
      scanner.start(cameras[1]);
    }
    else if (cameras.length == 1) {
      scanner.start(cameras[0]);
    } else {
      console.error('No cameras found.');
    }
  }).catch(function (e) {
    console.error(e);
  });