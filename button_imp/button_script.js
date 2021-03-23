/*
    add in code pushing information to database
*/
var firebaseConfig = {
    apiKey: "AIzaSyBS-U6WvAupP1MiyAbZSFSRHfCFfZpQ0k0",
    authDomain: "wramp-2.firebaseapp.com",
    projectId: "wramp-2",
    storageBucket: "wramp-2.appspot.com",
    messagingSenderId: "61596005540",
    appId: "1:61596005540:web:6dc4ebc53b349004aea231",
    measurementId: "G-0JDJCG8PX7"
  }; //code needed to set up the data base in any area that it is being used

function generateSessionID() {
    const d = new Date();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const m = month[d.getMonth()]
    return m + d.getDate() + "-" + d.getHours() + d.getMinutes() + "-" + d.getSeconds() + d.getMilliseconds()
} //generates the session id

function onClickStart(){ 
    var sessionId= generateSessionID()
    doc = {
        sessionId: sessionId,
        country: $('#country').val(),
        language: $('#language').val(),
        age: $('#age').val(), 
        chart: "arc",
    }
    if (!firebase.apps.length){
        firebase.initializeApp(firebaseConfig)
    }
    var DB= firebase.database()
    DB.ref("sessions/"+sessionId).set(doc)
    sessionStorage.setItem("demography", JSON.stringify(doc))
    setTimeout(function(){window.location='intro.html'}, 1000)
}

function logAnswer(sessionId, value, progress){
    doc2 = {
        value: value, 
        chart: "arc",
        answer: $('#textAnswer').val()
    }
    if (!firebase.apps.length){
        firebase.initializeApp(firebaseConfig)
    }
    var DB= firebase.database()
    DB.ref("exp/"+sessionId+"-"+progress).set(doc2)
}

function pageChanger(){
    dem = JSON.parse(sessionStorage.getItem("demography"))
    const buttonNum = Number(sessionStorage.getItem("buttonClicks"));
    switch(buttonNum){
        case 2:
            logAnswer(dem.sessionId, 75, 1)
            document.getElementById("questionHeader").innerHTML = "Question 2/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-0.png";
            sessionStorage.setItem("buttonClicks", "3")
            document.getElementById("textAnswer").value = ""
            break;
        case 3:
            logAnswer(dem.sessionId,0, 2)
            document.getElementById("questionHeader").innerHTML = "Question 3/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-85.png";
            sessionStorage.setItem("buttonClicks", "4")
            document.getElementById("textAnswer").value = ""
            break;
        case 4:
            logAnswer(dem.sessionId,85, 3)
            document.getElementById("questionHeader").innerHTML = "Question 4/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-35.png";
            sessionStorage.setItem("buttonClicks", "5")
            document.getElementById("textAnswer").value = ""
            break;
        case 5: 
            logAnswer(dem.sessionId,35, 4)
            document.getElementById("questionHeader").innerHTML = "Question 5/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-50.png";
            sessionStorage.setItem("buttonClicks", "6")
            document.getElementById("textAnswer").value = ""
            break;
        case 6:
            logAnswer(dem.sessionId,50, 5)
            document.getElementById("questionHeader").innerHTML = "Question 6/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-25.png";
            sessionStorage.setItem("buttonClicks", "7")
            document.getElementById("textAnswer").value = ""
            break;
        case 7:
            logAnswer(dem.sessionId,25, 6)
            document.getElementById("questionHeader").innerHTML = "Question 7/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-15.png";
            sessionStorage.setItem("buttonClicks", "8")
            document.getElementById("textAnswer").value = ""
            break;
        case 8:
            logAnswer(dem.sessionId,15, 7)
            document.getElementById("questionHeader").innerHTML = "Question 8/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-90.png";
            sessionStorage.setItem("buttonClicks", "9")
            document.getElementById("textAnswer").value = ""
            break;
        case 9:
            logAnswer(dem.sessionId,90, 8)
            document.getElementById("questionHeader").innerHTML = "Question 9/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-5.png";
            sessionStorage.setItem("buttonClicks", "10")
            document.getElementById("textAnswer").value = ""
            break;
        case 10:
            logAnswer(dem.sessionId,5, 9)
            document.getElementById("questionHeader").innerHTML = "Question 10/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-70.png";
            sessionStorage.setItem("buttonClicks", "11")
            document.getElementById("textAnswer").value = ""
            break;
        case 11:
            logAnswer(dem.sessionId,70, 10)
            document.getElementById("questionHeader").innerHTML = "Question 11/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-80.png";
            sessionStorage.setItem("buttonClicks", "12")
            document.getElementById("textAnswer").value = ""
            break;
        case 12:
            logAnswer(dem.sessionId,80, 11)
            document.getElementById("questionHeader").innerHTML = "Question 12/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-10.png";
            sessionStorage.setItem("buttonClicks", "13")
            document.getElementById("textAnswer").value = ""
            break;
        case 13:
            logAnswer(dem.sessionId,10, 12)
            document.getElementById("questionHeader").innerHTML = "Question 13/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-60.png";
            sessionStorage.setItem("buttonClicks", "14")
            document.getElementById("textAnswer").value = ""
            break;
        case 14:
            logAnswer(dem.sessionId,60, 13)
            document.getElementById("questionHeader").innerHTML = "Question 14/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-45.png";
            sessionStorage.setItem("buttonClicks", "15")
            document.getElementById("textAnswer").value = ""
            break;
        case 15:
            logAnswer(dem.sessionId,45, 14)
            document.getElementById("questionHeader").innerHTML = "Question 15/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-30.png";
            sessionStorage.setItem("buttonClicks", "16")
            document.getElementById("textAnswer").value = ""
            break;
        case 16:
            logAnswer(dem.sessionId,30, 15)
            document.getElementById("questionHeader").innerHTML = "Question 16/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-75.png";
            sessionStorage.setItem("buttonClicks", "17")
            document.getElementById("textAnswer").value = ""
            break;
        case 17:
            logAnswer(dem.sessionId,75, 16)
            document.getElementById("questionHeader").innerHTML = "Question 17/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-100.png";
            sessionStorage.setItem("buttonClicks", "18")
            document.getElementById("textAnswer").value = ""
            break;
        case 18:
            logAnswer(dem.sessionId,100, 17)
            document.getElementById("questionHeader").innerHTML = "Question 18/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-40.png";
            sessionStorage.setItem("buttonClicks", "19")
            document.getElementById("textAnswer").value = ""
            break;
        case 19:
            logAnswer(dem.sessionId,40, 18)
            document.getElementById("questionHeader").innerHTML = "Question 19/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-55.png";
            sessionStorage.setItem("buttonClicks", "20")
            document.getElementById("textAnswer").value = ""
            break;
        case 20:
            logAnswer(dem.sessionId,55, 19)
            document.getElementById("questionHeader").innerHTML = "Question 20/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-20.png";
            sessionStorage.setItem("buttonClicks", "21")
            document.getElementById("textAnswer").value = ""
            break;
        case 21:
            logAnswer(dem.sessionId,20, 20)
            document.getElementById("questionHeader").innerHTML = "Question 21/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-95.png";
            sessionStorage.setItem("buttonClicks", "22")
            document.getElementById("textAnswer").value = ""
            break;
        case 22:
            logAnswer(dem.sessionId,95, 21)
            setTimeout(function(){window.location='thank.html'}, 1000)// document.getElementById("formButton").style.visibility = "hidden";
            break;
    }
}