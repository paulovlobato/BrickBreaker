#pragma strict

var levelMgr: LevelManager;

function OnTriggerEnter2D (trigger){
Paddle.lives--;
Ball.notClicked = true;
if (Paddle.lives==0){
	levelMgr.LoadLevel("Lose");
	}
}