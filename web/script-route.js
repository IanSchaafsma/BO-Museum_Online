const myTitle = document.getElementById("myTitle")
const myImage = document.getElementById("myImage")
const myInput = document.getElementById("myInput")


let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}

let current_index = 0;

let lokaties = [
    {
        "titel":"0",
        "image":"img/FotoSlide1.jpg",
        "directions": {
            "zuid": 1
        }
    },

    {
        "titel":"1",
        "image":"img/FotoSlide2.jpg",
        "directions": {
            "west": 4,
            "noord": 0
        }
    },
    {
        "titel":"2",
        "image":"img/FotoSlide3.jpg",
        "directions":{
            "noord": 4,
            "west": 3
        }
    },
    {
        "titel":"3",
        "image":"img/FotoSlide4.jpg",
        "directions":{
            "oost": 2,
            "noord": 1
        }
    },
    {
        "titel":"4",
        "image":"img/fotoSlide5.jpg",
        "directions": {
            "oost": 1,
            "zuid": 2
        }
    }
]
//myTitle.innerHTML = "dit is door het script toegevoegd"
//myImage.src = "img/1.jpg"

function show(index){
    myTitle.innerHTML = lokaties[index].titel
    myImage.src = lokaties[index].image;
    current_index = index;

    updateDirections();
}

function updateDirections(){

}

function getInput(){
    show(myInput.value)
    //console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}

function goDirection(direction){
    let punt_index = lokaties[current_index].directions[direction];
    show(punt_index);
}

show(0)

var stars = document.getElementsByClassName("fas");
    var emoji = document.getElementById("emoji");

        stars[0].onclick = function(){
            stars[0].style.color = "#ffd93b";
            stars[1].style.color = "#e4e4e4";
            stars[2].style.color = "#e4e4e4";
            stars[3].style.color = "#e4e4e4";
            stars[4].style.color = "#e4e4e4";
            emoji.style.transform = "translateX(0)";
        }
        stars[1].onclick = function(){
            stars[0].style.color = "#ffd93b";
            stars[1].style.color = "#ffd93b";
            stars[2].style.color = "#e4e4e4";
            stars[3].style.color = "#e4e4e4";
            stars[4].style.color = "#e4e4e4";
            emoji.style.transform = "translateX(-100px)";
        }
        stars[2].onclick = function(){
            stars[0].style.color = "#ffd93b";
            stars[1].style.color = "#ffd93b";
            stars[2].style.color = "#ffd93b";
            stars[3].style.color = "#e4e4e4";
            stars[4].style.color = "#e4e4e4";
            emoji.style.transform = "translateX(-200px)";
        }
        stars[3].onclick = function(){
            stars[0].style.color = "#ffd93b";
            stars[1].style.color = "#ffd93b";
            stars[2].style.color = "#ffd93b";
            stars[3].style.color = "#ffd93b";
            stars[4].style.color = "#e4e4e4";
            emoji.style.transform = "translateX(-300px)";
        }
        stars[4].onclick = function(){
            stars[0].style.color = "#ffd93b";
            stars[1].style.color = "#ffd93b";
            stars[2].style.color = "#ffd93b";
            stars[3].style.color = "#ffd93b";
            stars[4].style.color = "#ffd93b";
            emoji.style.transform = "translateX(-400px)";
        }