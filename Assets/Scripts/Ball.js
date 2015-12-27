#pragma strict

var paddle: Paddle;
var paddleToBallDist : Vector3;
paddleToBallDist = transform.position - paddle.transform.position; //Calcula a posicao da bola p/ Paddle
static var notClicked;
	
function Start () {
notClicked = true;
}

function Update () {

	if (notClicked == true){
		transform.position = paddleToBallDist + paddle.transform.position; //Mantem atualizada a soma da bola com o paddle	
	}

	if (Input.GetMouseButtonDown(0) && notClicked==true){
		var ballBody = GetComponent.<Rigidbody2D>();
	    ballBody.velocity = new Vector2(0, 10);
	    notClicked = false;
	}

	if (LevelManager.demoMode && notClicked==true){
		ballBody = GetComponent.<Rigidbody2D>();
	    ballBody.velocity = new Vector2(3, 10);
		notClicked = false;
	}

	if (Input.GetKeyDown(KeyCode.Space)){
		if(Time.timeScale>0){
			Time.timeScale=0;
		} else {
			Time.timeScale=1;
		}
	}
}