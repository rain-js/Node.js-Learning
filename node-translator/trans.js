var request = require('request')

// node trans study
var parm = encodeURIComponent(process.argv[2]) 
var url = `http://fanyi.youdao.com/openapi.do?keyfrom=node-translator&key=2058911035&type=data&doctype=json&version=1.1&q=${parm}`

request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    }
})