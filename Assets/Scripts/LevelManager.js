#pragma strict

/*
function LoadLevelStart(){
	Application.LoadLevel("Start");
}


function LoadLevelGame(){
	Application.LoadLevel("Level");
}

function LoadLevelWin(){
	Application.LoadLevel("Win");
}

function LoadLevelLose(){
	Application.LoadLevel("Lose");
}
*/

static var demoMode=false;

function LoadLevel (name :String) {
	Application.LoadLevel(name);
}

function RequestQuit () {
	Application.Quit();
}

function StartDemo(){
	demoMode=true;
	Application.LoadLevel("Level1");
}