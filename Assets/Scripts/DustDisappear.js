#pragma strict
var ifDisappearWhenLand : boolean = true;

function Start () {

	if (!ifDisappearWhenLand) Destroy(this);

}

function Update () {

	if (transform.position.y < 0) Destroy(gameObject);

}

//下面方式则需要粒子本身具有rigidbody,否则和terrain无反应.原因在于不使用rigidbody,则运动没有及时判断,不会触发以下方法.
//因此,unity3d本身也要求两物体其中之一有rigidbody,目的在于能够及时判断.而即使有,如果其使用者本身不运动,也无法触发.
/*function OnTriggerEnter (other : Collider) {

	//if (other.gameObject.GetComponent(Terrain)) Destroy(gameObject);
	
}*/
