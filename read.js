// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase");
const express = require("express");

const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore")
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
  apiKey: "AIz3aSyffCsQcVdsfsdfddfdfsOAU3wHY-UTHiNI",
  authDomain: "sample-433ac.firebaseapp.com",
  databaseURL: "https://sample-433ac.firebaseio.com/",
  projectId: "sample-433ac",
  storageBucket: "sample-433ac.appspot.com",
};


firebase.initializeApp(config);

var db = firebase.database();
app.get("/", (req, res) => {
  const op = firebase.database().ref('/').once('value').then(function (snapshot) {
    var in_data = (snapshot.val() && snapshot.val().in) || null;
    var out_data = (snapshot.val() && snapshot.val().out) || null;
    const output = {
      in: in_data,
      out: out_data
    };
    res.send(output);
  });
})

app.listen(4000, () => console.log("App listening on port 4000"));
// exit();