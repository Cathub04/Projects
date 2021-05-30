window.onload = function grtng(){
	var Gname = prompt('Please enter your last name here.')
	var Ggender = prompt('Please enter your gender(male/female).')
	var Gtime = new Date().getHours()
	if (Gtime < 12){
		if(Ggender == 'male'){
			document.getElementById('greeting').innerHTML = 'Good morning, Mr.'+' '+Gname+'.';
		}
		else if(Ggender == 'female'){
			document.getElementById('greeting').innerHTML = 'Good monring, Ms.'+' '+Gname+'.';
		}
	}
	else if (Gtime >= 12){
		if(Ggender=='male'){
			document.getElementById('greeting').innerHTML = 'Good afternoon, Mr.'+' '+Gname+'.';
		}
		else if (Ggender=='female'){
			document.getElementById('greeting').innerHTML = 'Good afternoon, Ms.'+' '+Gname+'.';
		}
	}
}

function menu(){
	var fd=['Zero','Lemonade','Apple juice','Latte','Americano','Coffee Mocha','Whisky','Vodka','Donut pack','Bacon Sandwich'];
	var prz=[0,1,1,4,3,3,10,6,5,4];
	var choice1=document.getElementById("fchoice1").value;
	var choice2=document.getElementById("fchoice2").value;
	var choice3=document.getElementById("fchoice3").value;
	var rslt=parseInt(prz[choice1] + prz[choice2] + prz[choice3]);
  var mnth = document.getElementById('month').value;
  var dy = document.getElementById('day').value;
	document.getElementById('foods').innerHTML='Here is your order:'+ fd[choice1] +', '+ fd[choice2] +' '+'and'+' '+ fd[choice3] +'. '+'The total price is $'+ rslt +'. Your meal will be waiting you on the day of'+' '+mnth +'/'+dy+'.'
}

function psr() {
    var user=prompt('Paper,scisour,rock, enter initials of your choice(p s r), win this and get 10% discount on your next order!')
    var random=Math.floor(Math.random()*3+1);
    if (user == 'p'){
      if (random == 1) {
      alert("It was a draw, don't worry, get your next chance when next time you order a meal!");
       }
      else if (random == 2){
      alert("You lost the game, don't worry, get your next chance when next time you order a meal!");
       }
      else {
      alert('You won, 10% discount has added to your order!')
       }
     }
    else if(user == 's'){
      if (random == 1) {
      alert('You won, 10% discount has added to your order!');
       }
      else if (random == 2){
      alert("It was a draw, don't worry, get your next chance when next time you order a meal!");
       }
      else {
      alert("You lost the game, don't worry, get your next chance when next time you order a meal!")
       }
     }
    else if(user =='r'){
      if (random == 1) {
      alert("You lost the game, don't worry, get your next chance when next time you order a meal!");
       }
      else if (random == 2){
      alert('You won, 10% discount has added to your order!');
       }
      else {
      alert("It was a draw, don't worry, get your next chance when next time you order a meal!")
       }
     }
}
