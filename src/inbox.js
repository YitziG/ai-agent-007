import {getChatCompletion} from "./agent.js";

const messageArray = [];

// a function that takes in a raw text message and returns a message object
function parseMessage(message) {
    return{
        "role": "user",
        "content": message
    }
}

async function packageAndPostMessage(message) {
    console.log("user: ", message);
    const parsedMessage = parseMessage(message);
    messageArray.push(parsedMessage);
    let openAIResponse = await getChatCompletion(messageArray);
    messageArray.push(openAIResponse.data.choices[0].message);
    return openAIResponse;
}

let response = await packageAndPostMessage("Hello, please pick a number between 1 and 10");

console.log("assistant: ", response.data.choices[0].message.content);

response = await packageAndPostMessage("What's the number?");

console.log("assistant: ", response.data.choices[0].message.content);