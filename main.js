let button1= document.getElementById('rock');
button1.addEventListener('click', function(){

})



let choices = ["rock", "paper","scissors"];

function computerChoice(arr){
    let randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
}
