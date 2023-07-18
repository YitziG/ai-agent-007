import { OpenAIApi, Configuration} from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

function getChatCompletion(messages, model = 'gpt-4-0613' ) {
    return openai.createChatCompletion({
        model,
        messages
    });
}

export { getChatCompletion };