#pragma strict
var dustColor : Color;
var lowMaterial : Material;
var highMaterial : Material;

function Update () {

	lowMaterial.color = dustColor;
	highMaterial.color = dustColor;

}