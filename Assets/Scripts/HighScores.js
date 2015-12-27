#pragma strict

static var level1HighScore: int;
static var level2HighScore: int;
var level1 :UnityEngine.UI.Text;
var level2 :UnityEngine.UI.Text;

function Start () {
	level1.text=("Level 1: " +level1HighScore.ToString());
	level2.text=("Level 2: " +level2HighScore.ToString());
}

function Update () {
	
}