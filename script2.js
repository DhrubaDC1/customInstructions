
function doesWordExist(userJustSaid, triggerArray) {
    console.log("🚀 ~ doesWordExist ~ userJustSaid:", userJustSaid)
    let _ujs_lo = userJustSaid.toLowerCase();
    for (var i = triggerArray.length - 1; i >= 0; i--) {
        let _t = triggerArray[i];
        if (_ujs_lo.search(_t) != -1) {
            //   frame="1a_1";
            //   frameOncer=0;
            return true;
        }
    }
    return false
}

let currentConversationIdentifier = 'init'

function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);

    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
}

function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && outputTest(input);
    inputField.value = "";
}
let triggerArray = ['why', 'sad', 'hurt']

async function output(input) {
    if (conversationIdentifier == 'init') {
        if (doesWordExist(input)) {
            let response = 'I am not being noticed'
            addChat(input, response)
            let text = generateSSMLForMood(response, "mad")
            console.log("🚀 ~ output ~ text:", text)
            const { AudioStream, visemes } = await speakText(text)
            streamAudioData(AudioStream);

            conversationIdentifier = 'con-2' // ? strings can be used here to redirect to another flow
        }
        else {
            let response = 'Sorry, I am happy now'
            addChat(input, response)
            let text = generateSSMLForMood(response, "happy")
            console.log("🚀 ~ output ~ text:", text)
            const { AudioStream, visemes } = await speakText(text)
            streamAudioData(AudioStream);
            conversationIdentifier = 'con-2'
        }
    }
    else if (conversationIdentifier == 'con-2') {
        triggerArray = ['who', 'not', 'notic']
        if (doesWordExist(input)) {
            let response = 'Why are you like this?'
            addChat(input, response)
            let text = generateSSMLForMood(response, "happy")
            const { AudioStream, visemes } = await speakText(text)
            streamAudioData(AudioStream);
            conversationIdentifier = 'con-3'
        }
        else {
            let response = 'Sorry, I am happy now'
            addChat(input, response)
            conversationIdentifier = 'con-3'
        }
    }
    else if (conversationIdentifier == 'con-3') {
        triggerArray = ['who', 'not', 'notic']
        if (doesWordExist(input)) {
            let response = 'Why do you ignore me?'
            addChat(input, response)
            let text = generateSSMLForMood(response, "sad")
            const { AudioStream, visemes } = await speakText(text)
            streamAudioData(AudioStream);
            conversationIdentifier = 'con-3'
        }
        else {
            let response = 'Sorry, I am happy now'
            addChat(input, response)

        }
    }
}
async function outputTest(input) {
    const { triggerArray, yes, no } = conversations.find(({ conversationIdentifier }) => conversationIdentifier == currentConversationIdentifier)
    if (doesWordExist(input, triggerArray)) {
        addChat(input, yes.ssmlResponse)
        let text = generateSSMLForMood(yes.ssmlResponse, yes.mood)
        const { AudioStream, visemes } = await speakText(text)
        streamAudioData(AudioStream);
        currentConversationIdentifier = yes.nextIdentifier
    }
    else {
        addChat(input, no.ssmlResponse)
        let text = generateSSMLForMood(no.ssmlResponse, no.mood)
        const { AudioStream, visemes } = await speakText(text)
        streamAudioData(AudioStream);
        currentConversationIdentifier = no.nextIdentifier
    }
}

function addPollyTagsForVoiceEmotion(text, mood) {
    switch (mood) {
        case "happy":
            return '<speak><prosody volume="+20dB">Mary had <break time="300ms" />a little <mark name="animal" />lamb</prosody></speak>'
        case "sad":
            return text
        case "mad":
            return text
        default:
            return text
    }
}


function generateSSMLForMood(text, mood) {
    switch (mood) {
        case "happy":
            return `<speak><prosody volume="+20dB" rate="fast">${text}</prosody></speak>`;
        case "sad":
            return `<speak><prosody volume="-10dB" rate="slow" >${text}</prosody></speak>`;
        case "mad":
            return `<speak><amazon:breath duration="long" volume="x-loud"/><prosody volume="+20dB" pitch="high">${text}</prosody></speak>`;
        default:
            return `<speak>${text}</speak>`;
    }
}


{/* 
Voice Acting
https://docs.aws.amazon.com/polly/latest/dg/supportedtags.html
<emphasis level="strong">Strong emphasis</emphasis>
<emphasis level="moderate">Moderate emphasis</emphasis>
<prosody volume="loud">Loud speech</prosody>
<prosody volume="soft">Soft speech</prosody>
<prosody rate="fast">Fast speech</prosody>
<prosody rate="slow">Slow speech</prosody> 
*/}
