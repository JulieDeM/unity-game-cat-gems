#pragma strict
//using UnityEngine.UI;


public var points: int = 5;
public var pickedUpBy: String ="Player";
private var count: int;

//var restartText : GUIText;
//var gameOverText : GUIText;

//private  var gameOver : boolean;
//private  var restart : boolean;
public var countText: UnityEngine.UI.Text;
public var winText: UnityEngine.UI.Text;
//public GameObject[] gameobjects;

function Start () {
	GetComponent.<Animation>()["Ithcing"].layer  = 1;
	GetComponent.<Animation>()["Ithcing"].wrapMode = WrapMode.Once;
	GetComponent.<Animation>()["Meow"].layer  = 1;
	GetComponent.<Animation>()["Meow"].wrapMode = WrapMode.Once;

//	gameOver = false;
//    restart = false;
//    restartText.text = "";
//    gameOverText.text = "";

	count = 0;
	SetCountText ();
	winText.text = "";

}

function Update () {
	if(Input.GetKey ("c")){
		GetComponent.<Animation>().Play("Ithcing");
}
	if(Input.GetKey ("m")){
		GetComponent.<Animation>().Play("Meow");
	}
	if(Input.GetKey ("r"))
	{
		GetComponent.<Animation>().Play("Run");
	}

//	if (restart)
//    {
//        if (Input.GetKeyDown (KeyCode.N))
//        {
//            Application.LoadLevel (Application.loadedLevel);
//        }
//    }
}

function OnTriggerEnter (other : Collider) 
	{
	if(other.gameObject.CompareTag("gem"))
		{
		other.gameObject.SetActive (false);
		count = count + 1;
		SetCountText ();
		GetComponent.<Animation>().Play("Meow");
		}

//		if (gameOver)
//        {
//            restartText.text = "Press 'N' for Restart";
//            restart = true;
////            break;
//        }
}


function SetCountText ()
	{
	countText.text = "Points Earned: " + count.ToString ();
	if(count >= 15)
	{
	winText.text = "You Win!";
	}
//	} else if(count <= 20)
//	{
//	winText.text = "You got under 20 points. Try Again?";
//	}
	}

//	function GameOver () {
//    gameOverText.text = "Game Over!";
//    gameOver = true;
//}