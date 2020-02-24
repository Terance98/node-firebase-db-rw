// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase");
const express = require("express");
const bodyParser = require("body-parser")
// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore")

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Set the configuration for your app
  // TODO: Replace with your project's config object
  // var config = {
  //   apiKey: "apiKey",
  //   authDomain: "projectId.firebaseapp.com",
  //   databaseURL: "https://databaseName.firebaseio.com",
  //   projectId: "projectId"
  //   storageBucket: "bucket.appspot.com"
  // };
 
// eg:
var config = {
  apiKey: "AIzaSyCQVu4fsdfdsfhU4g2pdsfsdVGzNNWOAU3wHY-UTHiNI",
  authDomain: "sample-433ac.firebaseapp.com",
  databaseURL: "https://sample-433ac.firebaseio.com/",
  projectId: "sample-433ac",
  storageBucket: "sample-433ac.appspot.com",
};

 firebase.initializeApp(config);

 var db = firebase.database();

function writeInOut(in_data,out_data){
  firebase.database().ref("/").set({
    in:in_data,
    out:out_data
  });
}

app.get("/",(req,res) => {
  console.log(req);
  console.log(req.query.in, req.query.out);
  writeInOut(req.query.in,req.query.out);
  res.send("Done!!");
});

app.listen(4000, ()=> console.log("App running on port 4000"))