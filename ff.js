#pragma strict
import MiniJSON;
import System.Collections.Generic;
import SimpleJSON;

function Start () {
    var jsonString = "{ \"array\": [1.44,2,3], " +
        "\"object\": {\"key1\":\"value1\", \"key2\":256}, " +
        "\"string\": \"The quick brown fox \\\"jumps\\\" over the lazy dog \", " +
        "\"unicode\": \"\\u3041 Men\\u00fa sesi\\u00f3n\", " +
        "\"int\": 65536, " +
        "\"float\": 3.1415926, " +
        "\"bool\": true, " +
        "\"null\": null }";

    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    var www : WWW = new WWW (url);
    yield www;

    var dict = Json.Deserialize(www.text) as Dictionary.<String,System.Object>;

    var arrayList = new List.<System.Object>();

    Debug.Log("array[0]: "+arrayList[0]);

    //
    // var jsonObject = JSON.Parse(www.text);
    // var my = www.text;
    // var str11 = Json.Serialize(my);
    //
    // var dict = Json.Deserialize(jsonString) as Dictionary.<String,System.Object>;
    // var dict111 = Json.Deserialize(my) as Dictionary.<String,System.Object>;
    // // Debug.Log(dict111.data);
    // Debug.Log(dict);
    // Debug.Log(dict111);
    // Debug.Log(str11);
    //
    // Debug.Log("dict['array'][0]: " + ((dict["array"]) as List.<System.Object>)[0]);
    // Debug.Log("dict['array'][0]: " + ((dict111["time"]) as List.<System.Object>)[0]);
    // // Debug.Log("deserialized: " + dict.GetType());
    // // Debug.Log("dict['array'][0]: " + ((dict["array"]) as List.<System.Object>)[0]);
    // // Debug.Log("dict['string']: " + dict["string"] as String);
    // // Debug.Log("dict['float']: " + dict["float"]); // floats come out as doubles
    // // Debug.Log("dict['int']: " + dict["int"]); // ints come out as longs
    // // Debug.Log("dict['unicode']: " + dict["unicode"] as String);
    // // Debug.Log(my);
    // // Debug.Log(dict);
    // var str = Json.Serialize(jsonString);
    // var str11 = Json.Serialize(my);


    // Debug.Log(str11);
    // Debug.Log(((dict11["name"]) as List.<System.Object>)[0]);
}


// class simple extends System.Object {
//     function getString() : String {
//         return "hello";
//     }
// }
//
// function Start() {
//     var s = new simple();
//     var st = MiniJSON.jsonEncode(s.getString());
//     print(st);
// }