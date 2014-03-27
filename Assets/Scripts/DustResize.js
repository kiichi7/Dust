#pragma strict
var ifResize : boolean = true;
var lowMeshFliter : Mesh;
var lowMaterial : Material;
var highMeshFliter : Mesh;
var highMaterial : Material;
private var isPrecision : boolean = false;
var scaleValue : float = 1.0;
private var zoomScale : float = 1.2;

function OnTriggerEnter (other : Collider) {

	if (other.name == "Position_1") SetHight();
	else if (ifResize) {
		if (other.name == "Position_2") ScaleSize(0);
		else if (other.name == "Position_3") ScaleSize(1);
		else if (other.name == "Position_4") ScaleSize(2);
	}
	
}

function OnTriggerExit (other : Collider) {

	if (other.name == "Position_1") SetLow();
	else if (ifResize) {
		if (other.name == "Position_2") ScaleSize(1);
		else if (other.name == "Position_3") ScaleSize(2);
		else if (other.name == "Position_4") ScaleSize(3);
	}

}

function SetLow () {

	GetComponent(MeshFilter).mesh = lowMeshFliter;
	GetComponent(MeshRenderer).material = lowMaterial;

}

function SetHight () {

	GetComponent(MeshFilter).mesh = highMeshFliter;
	GetComponent(MeshRenderer).material = highMaterial;
	
}

function ScaleSize (p : float) {

	scaleValue = Mathf.Pow(zoomScale, p);
	transform.localScale = Vector3(scaleValue, scaleValue, scaleValue);

}

