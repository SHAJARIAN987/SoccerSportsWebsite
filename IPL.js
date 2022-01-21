var firebaseConfig = {
    apiKey: "AIzaSyCgeWi-0NwqZ_6piGXxLLkTC6hpk-P2fxY",
    authDomain: "soccersportswebsite-af585.firebaseapp.com",
    databaseURL: "https://soccersportswebsite-af585-default-rtdb.firebaseio.com",
    projectId: "soccersportswebsite-af585",
    storageBucket: "soccersportswebsite-af585.appspot.com",
    messagingSenderId: "536378264297",
    appId: "1:536378264297:web:24734e5902503be868be78",
    measurementId: "G-KSQZG0SXFL"
  };
firebase.initializeApp(firebaseConfig);
var UserInputsRef=firebase.database().ref("UserInputsRef");
document.getElementById("form").addEventListener("submit", submitForm);
function submitForm(e){
e.preventDefault();
var year=getInputVal("year");
readYear(year);
}
function readYear(year){
    var result;
    var ref=firebase.database().ref(year);
    ref.on("value", (data) => {
        result=data.val();
        document.getElementById("answer").innerHTML=result;
    })
    alert("dhuibafewbgiuw4bhtiucgyb");
}
function getInputVal(id){
    return document.getElementById(id).value;
}