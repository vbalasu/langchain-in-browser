set -x

echo "TESTING on localhost"
curl http://127.0.0.1:11434/api/generate -d '{
  "model": "mistral",
  "prompt": "Why is the sky blue?",
  "stream": false
}'

echo "TESTING on cloudmatica.com"
curl https://cloudmatica.com/ollama/api/generate -d '{
  "model": "mistral",
  "prompt": "Why is the sky blue?",
  "stream": false
}'
