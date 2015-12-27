#pragma strict

var ball: Ball; //Script ball
static var lives: int=3;

function Start(){

}

function Update () {
	if (LevelManager.demoMode==true){
		MoveWithBall();
	} else {		
		MoveWithMouse();
	}
}

function MoveWithMouse() {
	//Debug.Log(lives);
	//Debug.Log(LevelManager.demoMode);
	print("Using MoveWithMouse function");
	var xposition=(Input.mousePosition.x / Screen.width * 16); //Recebe o valor X da posicao do mouse
	var paddlePos = Vector3(xposition, transform.position.y, -0.91); //Grava em paddlePos as posicoes X Y e Z
	//print(xposition);
	//paddlePos = Vector3(xposition, transform.position.y, -0.91);
	paddlePos = Vector3(Mathf.Clamp(xposition, 0, 16), transform.position.y, -0.91);
	transform.position = paddlePos; //Transforma paddle position no valor armazenado em paddlePos	
}

function MoveWithBall () {
	Debug.Log(LevelManager.demoMode);
	var paddlePos = transform.position;
    var ballPos = ball.transform.position;
    paddlePos.x = ballPos.x;	
    transform.position = Vector3(Mathf.Clamp(paddlePos.x, 0, 16), transform.position.y, -0.91);
 }

/*
//Impede que a bola fique parada batendo na vertical em cima do paddle
function OnCollisionEnter2D(c: Collision2D){
	var ballBody = ball.GetComponent.<Rigidbody2D>();
	ballBody.velocity = new Vector2(2, 10);
}
*/