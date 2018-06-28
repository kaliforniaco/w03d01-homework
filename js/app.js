console.log("C:/>");
$(document).ready(function(){
class MeGotchi {
	constructor(name){
		this.name = name;
		this.hunger = 0;
		this.sleep = 0;
		this.boredom = 0;
		this.age = 0;
		this.alive = true;
}
}
let player = new MeGotchi("Dave");

console.log(player);













//// function repo \/  \/

//- Timer/Metrics
ticks=0;
const timePassing = () =>{
	console.log(`RUNTIME ${ticks}s`);
		ticks++;
		player.hunger=(player.hunger+.03);
		let hungerLevel=parseInt(player.hunger);
		console.log(`H${hungerLevel}`);
		$('#hunger-level').text(`H${hungerLevel}`);

		player.sleep=(player.sleep+.02);
		let sleepLevel=parseInt(player.sleep);
		console.log(`S${sleepLevel}`);
		$("#sleep-level").text(`S${sleepLevel}`);

		player.boredom=(player.boredom+.04);
		let boredLevel=parseInt(player.boredom);
		console.log(`B${boredLevel}`);
		$("#bored-level").text(`B${boredLevel}`)
		player.age=(player.age+.003);
		let ageLevel=parseInt(player.age);
		console.log(`A${ageLevel}`);
		$("#page").text(`Age ${ageLevel}`);
	}
	

// getNameSubmit/checkButton
$('#start-button').on('click', () => {
    console.log('clicked Start');
    let light = true;  
    const timePassed = setInterval(timePassing,1000)
    let name=$('#input-name').val();
    $('#input-name').val('');
    $('#pname').text(name);
  });

$('#feed-button').on('click', () => {
    console.log('clicked feed'); 
    player.hunger=(player.hunger-.5);
    player.sleep=(player.sleep+.3);
    player.boredom=(player.boredom+.2);
    console.log(`${ageLevel}-${player.hunger}-${player.sleep}-${player.boredom}`);
  });
$('#play-button').on('click', () => {
    console.log('clicked play'); 
    player.hunger=(player.hunger+.3);
    player.sleep=(player.sleep+.2);
    player.boredom=(player.boredom-.7); 
    console.log(`${ageLevel}-${player.hunger}-${player.sleep}-${player.boredom}`);
  });
$('#sleep-button').on('click', () => {
    console.log('clicked sleep'); 
    player.hunger=(player.hunger+.5);
    player.sleep=(player.sleep-.8);
    player.boredom=(player.boredom+.1); 
    console.log(`${ageLevel}-${player.hunger}-${player.sleep}-${player.boredom}`);
  });
$('#light-button').on('click', () => {
    console.log('clicked light');
    light = light ? false : true;  
    console.log(`${ageLevel}-${player.hunger}-${player.sleep}-${player.boredom}`);
  });
});		

