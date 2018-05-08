var request = require('request')

// request('http://www.baidu.com', function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body)
//     }
// })

// node trans study
var parm = process.argv[2]
console.log(process.argv)
console.log(parm)


var url = `http://fanyi.youdao.com/openapi.do?keyfrom=node-translator&key=2058911035&type=data&doctype=json&version=1.1&q=${parm}`

console.log(`url = ${url}`)

request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    }
})