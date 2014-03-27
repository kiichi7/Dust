#pragma strict
var ifFullScreen : boolean = false;
var ifShowCursor : boolean = true;
var ifLockCursor : boolean = false;
var ifRunInBackground : boolean = false;
var ifGameStarted : boolean = false;

function Start () {

	if((ifFullScreen)&&(!Application.isWebPlayer)) Screen.SetResolution(Screen.resolutions[Screen.resolutions.Length-1].width,Screen.resolutions[Screen.resolutions.Length-1].height,ifFullScreen);
	Screen.showCursor = ifShowCursor;
	Screen.lockCursor = ifLockCursor;
	Application.runInBackground = ifRunInBackground;
	if(!ifGameStarted) PauseStart();

}

function Update () {

	if(!ifGameStarted) {
		if(	GetComponent(ReadyCondition).isGameReady) {
			GoingStart ();
			ifGameStarted = true;
		}	
	}

}

function PauseStart () {

}

function GoingStart () {

}
