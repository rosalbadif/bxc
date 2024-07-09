function changeText1() {
    var button1 = document.getElementById("myButton1");
    if (button1.innerHTML === "+ Discover more") {
        button1.innerHTML = "- Close";
    } else {
        button1.innerHTML = "+ Discover more";
    }
}

function changeText2() {
    var button2 = document.getElementById("myButton2");
    if (button2.innerHTML === "+ Discover more") {
        button2.innerHTML = "- Close";
    } else {
        button2.innerHTML = "+ Discover more";
    }
}

function changeText3() {
    var button3 = document.getElementById("myButton3");
    if (button3.innerHTML === "+ Discover more") {
        button3.innerHTML = "- Close";
    } else {
        button3.innerHTML = "+ Discover more";
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
