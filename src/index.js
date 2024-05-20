// Invoke using `node src/index.js`, with "type": "module" in package.json
import { ChatOllama } from '@langchain/community/chat_models/ollama';
import lodash from 'lodash';
const _ = lodash;
async function main() {
    var model = new ChatOllama({baseUrl:'https://cloudmatica.com/ollama',model:'mistral'});
    var response = await model.invoke('Respond to this joke with as few words as possible: What tree fits in your hand?');
    if(typeof window !== 'undefined') {
        document.getElementById('output').innerText = response.content;
    }
    console.log(response);
    console.log(_.upperCase('Hello World'));
}

main();