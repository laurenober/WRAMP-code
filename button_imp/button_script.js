/*
    add in code pushing information to database
*/
var firebaseConfig = {
    apiKey: "AIzaSyAq-BWyAhZzAtqJHQhoy6s79tGHFMLaKBk",
    authDomain: "wramp-db.firebaseapp.com",
    projectId: "wramp-db",
    storageBucket: "wramp-db.appspot.com",
    messagingSenderId: "236925835989",
    appId: "1:236925835989:web:25f2921cd40327d7b4e05c"
}; //code needed to set up the data base in any area that it is being used

function generateSessionID() {
    const d = new Date();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const m = month[d.getMonth()]
    return m + d.getDate() + "-" + d.getHours() + d.getMinutes() + "-" + d.getSeconds() + d.getMilliseconds()
} //generates the session id


function pageChanger(){
    
    const buttonNum = Number(sessionStorage.getItem("buttonClicks"));
    switch(buttonNum){
        case 2:
            document.getElementById("questionHeader").innerHTML = "Question 2/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-0.png";
            sessionStorage.setItem("buttonClicks", "3")
            break;
        case 3:
            document.getElementById("questionHeader").innerHTML = "Question 3/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-85.png";
            sessionStorage.setItem("buttonClicks", "4")
            break;
        case 4:
            document.getElementById("questionHeader").innerHTML = "Question 4/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-35.png";
            sessionStorage.setItem("buttonClicks", "5")
            break;
        case 5:
            document.getElementById("questionHeader").innerHTML = "Question 5/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-50.png";
            sessionStorage.setItem("buttonClicks", "6")
            break;
        case 6:
            document.getElementById("questionHeader").innerHTML = "Question 6/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-25.png";
            sessionStorage.setItem("buttonClicks", "7")
            break;
        case 7:
            document.getElementById("questionHeader").innerHTML = "Question 7/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-15.png";
            sessionStorage.setItem("buttonClicks", "8")
            break;
        case 8:
            document.getElementById("questionHeader").innerHTML = "Question 8/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-90.png";
            sessionStorage.setItem("buttonClicks", "9")
            break;
        case 9:
            document.getElementById("questionHeader").innerHTML = "Question 9/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-5.png";
            sessionStorage.setItem("buttonClicks", "10")
            break;
        case 10:
            document.getElementById("questionHeader").innerHTML = "Question 10/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-70.png";
            sessionStorage.setItem("buttonClicks", "11")
            break;
        case 11:
            document.getElementById("questionHeader").innerHTML = "Question 11/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-80.png";
            sessionStorage.setItem("buttonClicks", "12")
            break;
        case 12:
            document.getElementById("questionHeader").innerHTML = "Question 12/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-10.png";
            sessionStorage.setItem("buttonClicks", "13")
            break;
        case 13:
            document.getElementById("questionHeader").innerHTML = "Question 13/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-60.png";
            sessionStorage.setItem("buttonClicks", "14")
            break;
        case 14:
            document.getElementById("questionHeader").innerHTML = "Question 14/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-45.png";
            sessionStorage.setItem("buttonClicks", "15")
            break;
        case 15:
            document.getElementById("questionHeader").innerHTML = "Question 15/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-30.png";
            sessionStorage.setItem("buttonClicks", "16")
            break;
        case 16:
            document.getElementById("questionHeader").innerHTML = "Question 16/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-75.png";
            sessionStorage.setItem("buttonClicks", "17")
            break;
        case 17:
            document.getElementById("questionHeader").innerHTML = "Question 17/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-100.png";
            sessionStorage.setItem("buttonClicks", "18")
            break;
        case 18:
            document.getElementById("questionHeader").innerHTML = "Question 18/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-40.png";
            sessionStorage.setItem("buttonClicks", "19")
            break;
        case 19:
            document.getElementById("questionHeader").innerHTML = "Question 19/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-55.png";
            sessionStorage.setItem("buttonClicks", "20")
            break;
        case 20:
            document.getElementById("questionHeader").innerHTML = "Question 20/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-20.png";
            sessionStorage.setItem("buttonClicks", "21")
            break;
        case 21:
            document.getElementById("questionHeader").innerHTML = "Question 21/21";
            document.getElementById("imgClickAndChange").src = "https://raw.githubusercontent.com/laurenober/WRAMP-code/main/images/arc-95.png";
            sessionStorage.setItem("buttonClicks", "22")
            break;
        case 22:
            document.getElementById("formButton").style.visibility = "hidden";
            break;
    }
}