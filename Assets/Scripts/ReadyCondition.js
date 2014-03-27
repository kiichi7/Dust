#pragma strict
var isGameReady : boolean = false;
var theCreator : GameObject;

function Start () {

}

function Update () {

	if(!isGameReady) {
		if(theCreator.GetComponent(DustCreator).isReady) isGameReady = true;
	}

}