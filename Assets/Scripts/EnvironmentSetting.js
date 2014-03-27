#pragma strict
var ambientColor : Color;
var cameraColor : Color;

function Start () {

}

function Update () {

	RenderSettings.ambientLight = ambientColor;
	for (var i=0; i<Camera.allCameras.Length; i++) {
		Camera.allCameras[i].backgroundColor = cameraColor;
	}

}