#pragma strict

var maxHits: int;
//maxHits = 3;
var timesHit: int;
var hitSprites : Sprite[];
static var brickCount: int;
var fragments: GameObject;

var impact: AudioClip;
var audioPos: Vector3;
var crash: AudioClip;
static var points: int;

function Start () {
	timesHit = 0;
	brickCount++;
	points=0;
}

/*function Update () {

}
*/


function OnCollisionEnter2D(c: Collision2D){
	timesHit = timesHit+1;
	points=points+100;
	//print("Trigger it's working");
	if (timesHit != maxHits){
		AudioSource.PlayClipAtPoint(impact, transform.position);
	}
	if (timesHit >= maxHits){
		brickCount--;
		AudioSource.PlayClipAtPoint(crash, transform.position);
		var fragments = Instantiate (fragments, transform.position, Quaternion.identity);
		Destroy(gameObject);
	}
	GetComponent(SpriteRenderer).sprite = hitSprites[timesHit-1];
	Debug.Log(brickCount);
	Debug.Log(fragments);

	if (Application.loadedLevel==1 && LevelManager.demoMode==true && brickCount == 0){
		Application.LoadLevel(Application.loadedLevel-1);
	}else{
		if (brickCount == 0){
			Application.LoadLevel(Application.loadedLevel+1);
		}
	}

//*****************
	if (Application.loadedLevel==1 && LevelManager.demoMode==false){
		HighScores.level1HighScore=points;
		}else if (Application.loadedLevel==2){
			HighScores.level2HighScore=points;
		}
}

function winGame(){
	Application.LoadLevel("Win");
}