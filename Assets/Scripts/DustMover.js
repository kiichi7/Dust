#pragma strict
var canImpactByHead : boolean = true;
var moveSpeed : Vector3 = Vector3(0, -0.01, 0);
var randomSpeed : Vector3 = Vector3(0.01, 0.01, 0.01);
private var nowRandomSpeed : Vector3;

function Start () {

	if (randomSpeed.x < 0) randomSpeed.x = -randomSpeed.x;
	if (randomSpeed.y < 0) randomSpeed.y = -randomSpeed.y;
	if (randomSpeed.z < 0) randomSpeed.z = -randomSpeed.z;

}

function Update () {

	if ((randomSpeed.x!=0)||(randomSpeed.y!=0)||(randomSpeed.z!=0)) SpeedRandom();
	transform.position += (moveSpeed + nowRandomSpeed) * Time.deltaTime;

}

function OnTriggerStay (other : Collider) {

	if ((other.name == "Position_0")&&(canImpactByHead)) MoveAway(other);
	
}

function MoveAway (other : Collider) {

	transform.Translate((transform.position - other.transform.position) * Time.deltaTime, Space.World);

}

function SpeedRandom () {

	nowRandomSpeed.x += Random.Range(-1,2) * 0.1 * randomSpeed.x;
	nowRandomSpeed.y += Random.Range(-1,2) * 0.1 * randomSpeed.y;
	nowRandomSpeed.z += Random.Range(-1,2) * 0.1 * randomSpeed.z;
	nowRandomSpeed.x = Mathf.Clamp(nowRandomSpeed.x, -randomSpeed.x, randomSpeed.x);
	nowRandomSpeed.y = Mathf.Clamp(nowRandomSpeed.y, -randomSpeed.y, randomSpeed.y);
	nowRandomSpeed.z = Mathf.Clamp(nowRandomSpeed.z, -randomSpeed.z, randomSpeed.z);

}