let chat_body = document.querySelector('#chat-body');
let chat_input= document.querySelector('#chat-input');
let getStarted = document.querySelector('.get-started');
let chat_input_area = document.querySelector('input');
let second = document.querySelector('.second').value;

let bot_chat_container = 

function displayChatArea(){
	chat_body.style = "display: block";
	
	chat_input.style = "display: block";

	getStarted.style = "display: none";

	//   console.log()
}

function getHumanInput(){
	let chatValue = chat_input_area.value;
	console.log(chatValue);
}