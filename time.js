#pragma strict
import SimpleJSON;
import System.Collections.Generic;
//
// function Start () {
//     var url = "http://restcountries.eu/rest/v2/capital/tallinn";
//     var www : WWW = new WWW (url);
//
//     Debug.Log(1);
//
//     yield www;
//     var jsonObject = JSON.Parse(www.text);
//
//     // string jsonString = jsonObject.ToString();
// }
//
function Start () {
    var jsonString: String;
    var val : String;

    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    var www : WWW = new WWW (url);
    yield www;
    var jsonObject = JSON.Parse(www.text);
    jsonString = jsonObject.ToString();
    val = jsonObject["data"]["time"][0];

    // versionString will be a string containing "1.0"
    // var versionNumber = N["version"].AsFloat;      // versionNumber will be a float containing 1.0
    // var name = N["data"]["sampleArray"][2]["name"];// name will be a string containing "sub object"
    // Debug.Log(jsonString["time"].Value);
    Debug.Log(val);




}

//
// #pragma strict
//
//
// function Start () {
//     var url = "http://restcountries.eu/rest/v2/capital/tallinn";
//     var www : WWW = new WWW (url);
//
//     Debug.Log(1);
//
//     yield www;
//
//     Debug.Log(2);
//
// // and check for errors
//     if (www.error == null){
//         var decoded:Object = eval(www.text);
//         //var response = JSON.Parse(www.text);
//         Debug.Log(decoded.name);
//         // request completed!
//     } else {
//         // something wrong!
//         Debug.Log("WWW Error: "+ www.error);
//     }
// }



// facebook graph api places



