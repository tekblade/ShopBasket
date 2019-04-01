let products=[ 
	{20: "dysk ssd"}, 
	{1100: "szafa"}, 
	{219: "pad xbox one"}, 
	{500: "monitor"},
	{789: "i7 processor"},
	{88: "soundblaster sbx"},
	{220: "mysz logitech"}, 
	{219: "klawiatura modecom"},
	{900: "gtx 1060"}, 
	{823: "rx 570"}
];
let itemCounter=0;
function addToBasket(value){		
	let shopBasket=JSON.parse(sessionStorage.getItem('pointer'));	
	itemCounter=JSON.parse(sessionStorage.getItem('counter'));
	let check=false;
	let help=JSON.parse(JSON.stringify(value));
	for(let i=0;i<shopBasket.length;i++){
		for(key in shopBasket[i]){
			if(JSON.stringify(help)==JSON.stringify(shopBasket[i][key])){
				let changeKey=key;
				changeKey++;
				shopBasket[i][key]=help;
				shopBasket[i][changeKey]=shopBasket[i][key];
				delete shopBasket[i][key];
				check=true;	
				itemCounter++;
			}	
		}
	}
	
	if(!check){
		shopBasket.push({1:help});
		itemCounter++;
	}
	sessionStorage.setItem("pointer",JSON.stringify(shopBasket));
	document.getElementById("change").innerHTML = `There are ${itemCounter} Item(s) in your Basket`;
	sessionStorage.setItem("counter",JSON.stringify(itemCounter));
}
///////////////////////////////////////////////////////////
function removeFromTheBasket(arrayElement){	
	let counter=JSON.parse(sessionStorage.getItem('counter'));
	counter--;
	sessionStorage.setItem("counter",JSON.stringify(counter));
	let helpKey;
	let shopBasket=JSON.parse(sessionStorage.getItem('pointer'));
	for(let i=0;i<shopBasket.length;i++){
		if(JSON.stringify(arrayElement)==JSON.stringify(shopBasket[i])){
			for(key in shopBasket[i]){
				helpKey=key;
				helpKey--;
				if(helpKey<=0){
					document.getElementById(`key${key}`).innerHTML = `0`;
					delete shopBasket[i];
				}				
				else {
					
					shopBasket[i]=JSON.parse(JSON.stringify(arrayElement));
					
					shopBasket[i][helpKey]=shopBasket[i][key];
					delete shopBasket[i][key];
					document.getElementById(`key${key}`).innerHTML = `${helpKey}`;
				}
				console.log(helpKey);
				sessionStorage.setItem("pointer", JSON.stringify(shopBasket));
				console.log(shopBasket);
			}
		}
	}
	location.reload("showbasket.html");

}