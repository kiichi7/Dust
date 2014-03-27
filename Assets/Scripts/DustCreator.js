#pragma strict
var dustGranule : Transform;
var theDust : GameObject;
var dustNumber : int;
var dustCreatSpeed : float = 10;
private var timer : float;
var dustArea : Vector3;
var thePlayer : Transform;
var ifFollowPlayer : boolean = false;
private var nowPositon : Vector3;
private var nowRotation : Quaternion;
var theCounter : int;
var isReady : boolean = true;

function Start () {

	theCounter = 0;
	if (dustCreatSpeed < 0) dustCreatSpeed = -dustCreatSpeed;

}

function Update () {

	timer += Time.deltaTime;
	
	while (theCounter < dustCreatSpeed * timer) {
		InstantiateDust();
		theCounter ++;	
	}
	if (ifFollowPlayer) {
		transform.position.x = thePlayer.position.x;
		transform.position.z = thePlayer.position.z;
	}

}

function InstantiateDust () {

		nowPositon = RandomPosition();
		nowRotation.eulerAngles = RandomRotation();
		Instantiate (dustGranule, nowPositon, nowRotation).parent = theDust.transform;

}

function Random360 () {

	return (Random.Range(0,360));

}

function RandomPosition () {

	return (Vector3(transform.position.x + Random.Range(-1.0,1.0) * dustArea.x, transform.position.y + Random.Range(-1.0,1.0) * dustArea.y, transform.position.z + Random.Range(-1.0,1.0) * dustArea.z));

}

function RandomRotation () {

	return (Vector3(Random360(), Random360(), Random360()));

}