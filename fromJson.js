#pragma strict
// import SimpleJSON;
import UnityEngine.UI;
import System.Collections.Generic;
import System.Text;


// var car: GameObject;
var ThisButton : GameObject;
public class Ball {
    public var size : float;
    public var first_name : String;
    public var avatar : String;
    public var last_name : String;
    public var total : int;
    public var per_page : int;
    public var data : Object;
    public var page : int;
}

public class Balls {
    public var data : Ball[];

}


function Start () {
    var url = "https://reqres.in/api/users?page=2";
    var www : WWW = new WWW (url);
    var jsonString: String;
    yield www;
    var my = www.text;
    var jsonObject = JSON.Parse(my);
    jsonString = jsonObject.ToString();
    var oneBall : Ball = JsonUtility.FromJson.<Ball>(jsonString);
    Debug.Log(oneBall.page);

    var ballsJson : String = jsonString;
    var manyBalls : Balls = JsonUtility.FromJson.<Balls>(ballsJson);
    var name = manyBalls.data[0].first_name;
    Debug.Log(manyBalls.data[0].avatar);
    Debug.Log(manyBalls.data[0].first_name);
    // Debug.Log(car.name);
    ThisButton.GetComponentInChildren(Text).text = name;
}






// // Use the data
//     for (var i = 0; i < manyBalls.allBalls.length; i++) {
//     Debug.Log('#'+i+') BALL:\nCOLOR: '+manyBalls.allBalls[i].color+'\nSIZE: '+manyBalls.allBalls[i].size+'\nWEIGHT: '+manyBalls.allBalls[i].weight);
// }
//



