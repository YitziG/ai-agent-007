import { OpenAIApi, Configuration} from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const response = await openai.createChatCompletion({
    model: 'gpt-4-0613',
    messages: [
        {
            "role": "user",
            "content": "Hello, how are you?"
        }
    ]
})

console.log(response.data.choices[0].message.content);