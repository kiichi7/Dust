#pragma strict
var firstStyle : GUIStyle;
var secondStyle : GUIStyle;
var leftStyle : GUIStyle;
var rightStyle : GUIStyle;
var centerStyle : GUIStyle;

private var firstHeadPosition : Rect;
private var secondHeadPosition : Rect;
private var leftBottomPosition : Rect;
private var rightBottomPosition : Rect;
private var restartPosition : Rect;
private var quitPosition : Rect;
private var centerTipsPosition : Rect;

var firstHead : String = "First Head";
var secondHead : String = "Second Head";
var leftBottom : String = "Left Bottom";
var rightBottom : String = "Right Bottom";
var restartGame : String = "Restart(R)";
var quitGame : String = "Quit(Q)";
var menuTips : String = "Press ESC to continue";
var endHead : String = "END";
var endWords : String = "Thank for playing this game";
var endTips : String = "Press anykey to quit the game";

private var status : int = 0;
private var timer : float = 0.0;

var appearTime : float = 3.0;
var disappearTime : float = 2.0;

private var shortLength : float;

var ifPause : boolean = false;

function Start () {
	
	firstStyle.alignment = TextAnchor.LowerCenter;
	secondStyle.alignment = TextAnchor.UpperCenter;
	leftStyle.alignment = TextAnchor.LowerLeft;
	rightStyle.alignment = TextAnchor.LowerRight;
	centerStyle.alignment = TextAnchor.LowerCenter;

}

function Update () {

	shortLength = Mathf.Min(Screen.width,Screen.height);
	
	firstStyle.fontSize = shortLength/10;
	secondStyle.fontSize = shortLength/15;
	leftStyle.fontSize = shortLength/25;
	rightStyle.fontSize = shortLength/25;
	centerStyle.fontSize = shortLength/25;
	
	firstHeadPosition.center =  Vector2(Screen.width/2, Screen.height/2 - shortLength/15);
	secondHeadPosition.center =  Vector2(Screen.width/2, Screen.height/2 - shortLength/15);
	leftBottomPosition.center =  Vector2(shortLength/25, Screen.height - shortLength/25);
	rightBottomPosition.center =  Vector2(Screen.width - shortLength/25, Screen.height - shortLength/25);
	restartPosition.center =  Vector2(Screen.width/2, Screen.height/2 - shortLength/10);
	quitPosition.center =  Vector2(Screen.width/2, Screen.height/2);
	centerTipsPosition.center =  Vector2(Screen.width/2, Screen.height*3/4);
	
	switch (status) {
		case 0:
			if (timer < appearTime) {
				timer += Time.deltaTime;
				if (timer > appearTime) timer = appearTime;
			}
			firstStyle.normal.textColor.a = timer/appearTime;
			secondStyle.normal.textColor.a = timer/appearTime;
			leftStyle.normal.textColor.a = timer/appearTime;
			rightStyle.normal.textColor.a = timer/appearTime;
			if ((timer > appearTime/2)&&(Input.anyKey)) {
				status = 1;
				timer *= disappearTime/appearTime;
			}
		break;
		case 1:
			if (timer > 0) {
				timer -= Time.deltaTime;
				if (timer < 0) timer = 0;
			}
			firstStyle.normal.textColor.a = timer/disappearTime;
			secondStyle.normal.textColor.a = timer/disappearTime;
			leftStyle.normal.textColor.a = timer/disappearTime;
			rightStyle.normal.textColor.a = timer/disappearTime;
			if (timer == 0) {
				status = 2;
				firstStyle.normal.textColor.a = 1;
				secondStyle.normal.textColor.a = 1;
				leftStyle.normal.textColor.a = 1;
				rightStyle.normal.textColor.a = 1;
			}
		break;
		case 2:
			if (Input.GetKeyDown(KeyCode.Escape)) {
				if (ifPause) Time.timeScale = 0;
				status = 3;
			}
		break;
		case 3:
			if (Input.GetKeyDown(KeyCode.Escape)) {
				if (ifPause) Time.timeScale = 1;
				status = 2;
			}
			else if (Input.GetKeyDown(KeyCode.R)) Application.LoadLevel(Application.loadedLevel);
			else if ((Input.GetKeyDown(KeyCode.Q))&&(!Application.isWebPlayer)) status = 4;
		break;
		case 4:
			timer += Time.deltaTime;
			if ((timer > 1)&&(Input.anyKey)) Application.Quit();
		break;
		default:
		break;
	}
}

function OnGUI () {

	switch (status) {
		case 0: 
		case 1:
			GUI.Label(firstHeadPosition, firstHead, firstStyle);
			GUI.Label(secondHeadPosition, secondHead, secondStyle);
			GUI.Label(leftBottomPosition, leftBottom, leftStyle);
			GUI.Label(rightBottomPosition, rightBottom, rightStyle);
		break;
		case 2: 
		break;
		case 3: 
			GUI.Label(restartPosition, restartGame, secondStyle);
			if (!Application.isWebPlayer) GUI.Label(quitPosition, quitGame, secondStyle);
			GUI.Label(centerTipsPosition, menuTips, centerStyle);
		break;
		case 4: 
			GUI.Label(firstHeadPosition, endHead, firstStyle);
			GUI.Label(secondHeadPosition, endWords, secondStyle);
			GUI.Label(centerTipsPosition, endTips, centerStyle);
		break;
		default:
		break;
	}
	
}
