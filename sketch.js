function changeText1() {
    var button1 = document.getElementById("myButton1");
    if (button1.innerHTML === "+ Scopri di più") {
        button1.innerHTML = "- Nascondi";
    } else {
        button1.innerHTML = "+ Scopri di più";
    }
}

function changeText2() {
    var button2 = document.getElementById("myButton2");
    if (button2.innerHTML === "+ Scopri di più") {
        button2.innerHTML = "- Nascondi";
    } else {
        button2.innerHTML = "+ Scopri di più";
    }
}

function changeText3() {
    var button3 = document.getElementById("myButton3");
    if (button3.innerHTML === "+ Scopri di più") {
        button3.innerHTML = "- Nascondi";
    } else {
        button3.innerHTML = "+ Scopri di più";
    }
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='none'
}
