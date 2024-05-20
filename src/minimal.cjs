// Invoke using `node src/minimal.cjs`, with "type": "commonjs" in package.json
async function main() {
    const { ChatOllama } = require('@langchain/community/chat_models/ollama');
    var model = new ChatOllama({baseUrl:'https://cloudmatica.com/ollama',model:'mistral'});
    var response = await model.invoke('Respond to this joke with as few words as possible: What tree fits in your hand?');
    console.log(response);
}

main();