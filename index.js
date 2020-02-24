// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase");
const express = require("express");
const bodyParser = require("body-parser")
var AWS = require('aws-sdk');

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore")

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

exports.handler = app;

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
    apiKey: "AIzaSy3C6QVuff4MIhjdfWOAU3wHY-UTHiNI",
    authDomain: "sample-433ac.firebaseapp.com",
    databaseURL: "https://sample-433ac.firebaseio.com/",
    projectId: "sample-433ac",
    storageBucket: "sample-433ac.appspot.com",
};


firebase.initializeApp(config);

var db = firebase.database();


function writeInOut(in_data, out_data) {
    firebase.database().ref("/Admin/Camosa").set({
        in: in_data,
        out: out_data
    });
}

app.get("/write", (req, res) => {
    writeInOut(req.query.in, req.query.out);
    res.send("Done!!");
});


app.get("/read", (req, res) => {
    const op = firebase.database().ref('/Total').once('value').then(function (snapshot) {
        var in_data = (snapshot.val() && snapshot.val().in) || null;
        var out_data = (snapshot.val() && snapshot.val().out) || null;
        const output = {
            in: in_data,
            out: out_data
        };
        const response = {
        statusCode: 200,
        body: JSON.stringify(output),
    };
    res.send(response);

    });
})


app.listen(4000, () => console.log("App running on port 4000"));