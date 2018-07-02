#pragma strict
// import SimpleJSON;
import System.Collections.Generic;

function Start () {
    var url = "https://reqres.in/api/users?page=2";
    var www : WWW = new WWW (url);
    var jsonString: String;
    var Keys : String;
    yield www;
    var my = www.text;
    var jsonObject = JSON.Parse(my);
    jsonString = jsonObject.ToString();
    var oneBall : Ball = JsonUtility.FromJson.<Ball>(jsonString);
    // Debug.Log(oneBall.page);
    // Debug.Log(oneBall.total);
    // Debug.Log(oneBall.per_page);
    // Debug.Log(oneBall.first_name);
    // // Debug.Log(oneBall.[data]);
    // Debug.Log(jsonString);

    var ballsJson : String = jsonString;
    var manyBalls : Balls = JsonUtility.FromJson.<Balls>(ballsJson);
    Debug.Log(ballsJson.length);
    Debug.Log(jsonString.length);
    Debug.Log(manyBalls.data[0].first_name);

}
 
public class Ball { // this is required in both cases: single and array
    public var size : float;
    public var first_name : String;
    public var avatar : String;
    public var last_name : String;
    public var total : int;
    public var per_page : int;
    public var data : Object;
    public var page : int;
}

public class Balls { // this is required only in case of array
    public var data : Ball[];

}




// // Use the data
//     for (var i = 0; i < manyBalls.allBalls.length; i++) {
//     Debug.Log('#'+i+') BALL:\nCOLOR: '+manyBalls.allBalls[i].color+'\nSIZE: '+manyBalls.allBalls[i].size+'\nWEIGHT: '+manyBalls.allBalls[i].weight);
// }
//



