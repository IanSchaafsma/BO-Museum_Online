const myTitle = document.getElementById("myTitle")
const myImage = document.getElementById("myImage")
const myInput = document.getElementById("myInput")

let lokaties = [
    {
        "titel":"0",
        "image":"img/FotoSlide1.jpg"
    },

    {
        "titel":"1",
        "image":"img/FotoSlide2.jpg"
    },
    {
        "titel":"2",
        "image":"img/FotoSlide3.jpg"
    },
    {
        "titel":"3",
        "image":"img/FotoSlide4.jpg"
    },
    {
        "titel":"4",
        "image":"img/fotoSlide5.jpg"
    }
]
//myTitle.innerHTML = "dit is door het script toegevoegd"
//myImage.src = "img/1.jpg"

function show(index){
    myTitle.innerHTML = lokaties[index].titel
    myImage.src = lokaties[index].image;
}

function getInput(){
    show(myInput.value)
    //console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}