var drinks = [];
var players = [];
var drinkIndex = 0;
var playerIndex = 0;

function dEntered() {
    let drinkEntered = document.getElementById("drinkEntered").value;
    if (drinkEntered.length > 7) {
        alert("please enter a drink name with less than 7 charatcters");
    } else {
      drinks.push(drinkEntered);
        let table = document.getElementById("drinkTable");
        let row = table.insertRow(1);
        row.innerHTML = "<td>" + drinkEntered + "</td><td><button id='remove' onclick='deleteRow(this)'>Drink Gone</button></td>";
        document.getElementById("drinkEntered").value = "";
    }
}
function nEntered(test) {
    let nameEntered = document.getElementById("nameEntered").value;
    if (nameEntered.length > 7) {
        alert("Please enter a name with less than 7 characters");
    } else {
        players.push(nameEntered);
        let table = document.getElementById("nameTable");
        let row = table.insertRow(1);
        row.innerHTML = "<td>" + nameEntered + "</td><td><button id='remove' onclick='deleteRow(this)'>Player Exit</button></td>";
        document.getElementById("nameEntered").value = "";
    }
}
var name;
function deleteRow(r) {
    name = r.parentElement.parentElement.firstChild.innerHTML;
    let id = r.parentElement.parentElement.parentElement.parentElement.id;
    if(id == "nameTable"){
      r.parentElement.parentElement.remove();
      for(let i = 0; i < players.length; i++){
          if(name == players[i]){
          players.splice(i, 1);
        }
      }
    } else if(id == "drinkTable"){
      r.parentElement.parentElement.remove();
      for(let i = 0; i < drinks.length; i++){
        if(name == drinks[i]){
          drinks.splice(i, 1);
        }
      }
    }


}
//function function(item, index, arr, name){
//if(arr[index] = name){
//	console.log('yay');
//	players.splice(index, index + 1);
//}
//		console.log('nay');
//}
var index = 0;
function assign() {
    let randomNumber1 = Math.floor(Math.random() * drinks.length);
    let randomNumber2 = Math.floor(Math.random() * players.length);
    let personDrinking = players[randomNumber2];
    let alcholicDrink = drinks[randomNumber1];
    index++;
    document.getElementById('field').innerHTML = `${index}. The person drinking is ${players[randomNumber2]} and the drink they are having is ${drinks[randomNumber1]}!`;
    if(index == 3){
      document.getElementById("hint").innerHTML = "   Hint! - If you want more of a chance to get a drink, then add it twice!!";
    }
}
