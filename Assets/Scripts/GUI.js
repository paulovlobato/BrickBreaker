#pragma strict

var Lives :UnityEngine.UI.Text; //Add a variable of Unity TEXT type
var Points :UnityEngine.UI.Text;
//It has to link this script to the text object at the game inspector
function Start () {

}

function Update () {
	Lives.text = Paddle.lives.ToString(); //Shows the number of lives from Paddle.lives, converting it to String.
	Points.text = ("Points: " +BrickScript.points.ToString());
	//Debug.Log(Lives.text);
}