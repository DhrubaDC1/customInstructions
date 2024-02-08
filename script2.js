const doesWordExist = (userJustSaid, triggerArray) => {
	console.log("🚀 ~ doesWordExist ~ userJustSaid:", userJustSaid);
	const userJustSaidLower = userJustSaid.toLowerCase();
	for (let i = triggerArray.length - 1; i >= 0; i--) {
		const triggerLower = triggerArray[i].toLowerCase();
		if (userJustSaidLower.includes(triggerLower)) {
			return true;
		}
	}
	return false;
};

function randly(synonyms) {
	const randomIndex = Math.floor(Math.random() * synonyms.length);
	console.log("🚀 ~ pickRandomSynonym ~ randomIndex:", randomIndex, synonyms);
	return synonyms[randomIndex];
}

function addChat(input, product, init) {
	const { mood, ssmlResponse, action } = product;
	const mainDiv = document.getElementById("message-section");
	if (!init) {
		let userDiv = document.createElement("div");
		userDiv.id = "user";
		userDiv.classList.add("message");
		userDiv.innerHTML = `<span id="user-response">${input}</span>`;
		mainDiv.appendChild(userDiv);
	}

	let botDiv = document.createElement("div");
	botDiv.id = "bot";
	botDiv.classList.add("message");
	botDiv.innerHTML = `<span id="bot-response">${ssmlResponse}</span>`;
	mainDiv.appendChild(botDiv);
	var scroll = document.getElementById("message-section");
	scroll.scrollTop = scroll.scrollHeight;

	document.getElementById("mood").innerText = mood;
	document.getElementById("action").innerText = action;
}

function sendMessage() {
	const inputField = document.getElementById("input");
	let input = inputField.value.trim();
	input != "" && outputTest(input, false);
	inputField.value = "";
}
let triggerArray = ["why", "sad", "hurt"];

let currentConversationIdentifier = "con-1";

window.onload = function () {
	outputTest("ready", true);
};

async function outputTest(input, init) {
	const { triggerArray, yes, no } = conversations.find(
		({ conversationIdentifier }) =>
			conversationIdentifier == currentConversationIdentifier
	);
	if (doesWordExist(input, triggerArray)) {
		let prevYSsml = { ...yes };
		prevYSsml.ssmlResponse = replaceUserJustSaid(
			randly(prevYSsml.ssmlResponse),
			input
		);

		addChat(input, prevYSsml, init);
		let text = generateSSMLForMood(prevYSsml.ssmlResponse, yes.mood);
		const { AudioStream, visemes } = await speakText(text);
		streamAudioData(AudioStream);
		currentConversationIdentifier = yes.nextIdentifier;
	} else {
		let prevNSsml = { ...no };
		prevNSsml.ssmlResponse = replaceUserJustSaid(
			randly(prevNSsml.ssmlResponse),
			input
		);
		addChat(input, prevNSsml, init);
		let text = generateSSMLForMood(prevNSsml.ssmlResponse, no.mood);
		const { AudioStream, visemes } = await speakText(text);
		streamAudioData(AudioStream);
		currentConversationIdentifier = no.nextIdentifier;
	}
}

function addPollyTagsForVoiceEmotion(text, mood) {
	switch (mood) {
		case "happy":
			return '<speak><prosody volume="+20dB">Mary had <break time="300ms" />a little <mark name="animal" />lamb</prosody></speak>';
		case "sad":
			return text;
		case "mad":
			return text;
		default:
			return text;
	}
}

function generateSSMLForMood(text, mood) {
	switch (mood) {
		case "happy":
			return `<speak><prosody volume="+20dB" rate="fast">${text}</prosody></speak>`;
		case "sad":
			return `<speak><prosody volume="-10dB" rate="slow">${text}</prosody></speak>`;
		case "angry":
			return `<speak><amazon:breath duration="long" volume="x-loud"/><prosody volume="+20dB" pitch="high">${text}</prosody></speak>`;
		case "disgusted":
			return `<speak><voice name="Joanna"><prosody rate="slow">${text}</prosody></voice></speak>`;
		case "surprised":
			return `<speak><prosody pitch="x-high">${text}</prosody></speak>`;
		case "frightened":
			return `<speak><amazon:breath duration="long"/><prosody rate="slow">${text}</prosody></speak>`;
		default:
			return `<speak>${text}</speak>`;
	}
}
function replaceUserJustSaid(sentence, replacement) {
	let str = sentence.replace(/#userJustSaid/g, replacement);
	console.log("🚀 ~ replaceUserJustSaid ~ str:", str);
	return str;
}

{
	/* 
  Voice Acting
  https://docs.aws.amazon.com/polly/latest/dg/supportedtags.html
  <emphasis level="strong">Strong emphasis</emphasis>
  <emphasis level="moderate">Moderate emphasis</emphasis>
  <prosody volume="loud">Loud speech</prosody>
  <prosody volume="soft">Soft speech</prosody>
  <prosody rate="fast">Fast speech</prosody>
  <prosody rate="slow">Slow speech</prosody> 
  */
}
