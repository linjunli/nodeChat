// const http = require('http');
// const assert = require('assert');

/*Buffer 实例*/
//创建方法
// 1. Buffer.alloc(size[, fill[, encoding]]);特点：安全，速度慢
// const bufAlloc = Buffer.alloc(5, 'a', 'utf8');

// 2. Buffer.allocUnsafe(size)；特点：速度快，不安全
// const bufAllocUnsafe = Buffer.allocUnsafe(5);

// 3. Buffer.allocUnsafeSlow(size)；创建非池Buffer，内容位置，可能包含已知数据
// const bufAllocUnsafeSlow = Buffer.allocUnsafeSlow(5);


// const obj1 = {
// 	a : {
// 		b :1
// 	}
// };

// const obj4 = Object.create(obj1);
// const buf1 = Buffer.alloc(10);
// const buf2 = Buffer.alloc(10, 1);

// const buf3 = Buffer.allocUnsafe(10);

// // /*assert 断言*/
// assert.deepEqual(obj1, obj4);
// assert(0);

/*Buffer 拷贝*/
// const arr = new Uint16Array(2);

// arr[0] = 5000;
// arr[1] = 4000;

// 拷贝 `arr` 的内容
// const buf1 = Buffer.from(arr);

// 与 `arr` 共享内存
// const buf2 = Buffer.from(arr.buffer);

// 输出: <Buffer 88 a0>
// console.log(buf1);

// 输出: <Buffer 88 13 a0 0f>
// console.log(buf2);

// arr[1] = 6000;

// 输出: <Buffer 88 a0>
// console.log(buf1);

// 输出: <Buffer 88 13 70 17>
// console.log(buf2);





/*node发布服务*/
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

/*ES6 for..of..  console在server.listen之前发生*/
// const array = [0,1,2,3,4,5,6];
// for(var b of array){
// 	console.log(b);
// }

/*child_process*/
// const spawn = require('child_process').spawn;
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`子进程退出码：${code}`);
// });
// 仅限 Windows 系统
// const spawn = require('child_process').spawn;
// const bat = spawn('cmd.exe', ['/', 'my.bat']);

// bat.stdout.on('data', (data) => {
//   console.log("out:" + data.toString());
// });

// bat.stderr.on('data', (data) => {
//   console.log("err" + data.toString());
// });

// bat.on('exit', (code) => {
//   console.log(`子进程退出码：${code}`);
// });


// const exec = require('child_process').exec;
// var option = {
//   encoding: 'utf8',
//   timeout: 0,
//   maxBuffer: 200*1024,
//   killSignal: 'SIGTERM',
//   cwd: null,
//   env: null,
//   detached: true
// };
// exec('composer -v', option , (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// });

// const execFile = require('child_process').execFile;
// const childExeFile = execFile('php', ['-v'], (err, stdout, stderr) => {
// 	if(err){
// 		throw err;
// 	}
// 	console.log(stdout);
// })
/*child_process.execFile() 函数类似 child_process.exec()，除了不衍生一个 shell。 而是，指定的可执行的 file 被直接衍生为一个新进程，这使得它比 child_process.exec() 更高效。*/


/*集群 Cluster Node.js*/
// const cluster = require('cluster');

// if (cluster.isMaster) {

//   // Keep track of http requests
//   let numReqs = 0;
//   setInterval(() => {
//     console.log(`numReqs = ${numReqs}`);
//   }, 1000);

//   // Count requests
//   function messageHandler(msg) {
//     if (msg.cmd && msg.cmd === 'notifyRequest') {
//       numReqs += 1;
//     }
//   }

//   // Start workers and listen for messages containing notifyRequest
//   const numCPUs = require('os').cpus().length;
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   for (const id in cluster.workers) {
//   	console.log(id);
//     cluster.workers[id].on('message', messageHandler);
//   }

// } else {

//   // Worker processes have a http server.
//   http.Server((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');

//     // notify master about the request
//     process.send({ cmd: 'notifyRequest' });
//   }).listen(8000);
// }

// /*加密Crypto*/
// const crypto = require('crypto');

// const secret = 'abcdefg';
// const hash = crypto.createHmac('sha256', secret)
//                    .update('I love cupcakes')
//                    .digest('hex');
// console.log(hash);
// // Prints:
// //   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e
// //   

// /*DNS */
// const dns = require('dns');
// dns.lookup('nodejs.org', (err, addresses, family) => {
// 	console.log('addresses', addresses);
// })

// /*Node.js callback*/
// const fs = require('fs');

// function nodeStyleCallback(err, data) {
//  if (err) {
//    console.error('有一个错误', err);
//    return;
//  }
//  console.log(data);
// }

// fs.readFile('/some/file/that/does-not-exist', nodeStyleCallback);
// fs.readFile('/some/file/that/does-exist', nodeStyleCallback)

// try {
//   fs.readFile('/some/file/that/does-not-exist', (err, data) => {
//     // 假设的错误：在这里抛出
//     if (err) {
//       throw err;
//     }
//   });
// } catch(err) {
//   // 这不会捕获到抛出！
//   console.log(err);
// }


// Much better!

// const cluster = require('cluster');
// const PORT = +process.env.PORT || 1337;

// if (cluster.isMaster) {
//   // In real life, you'd probably use more than just 2 workers,
//   // and perhaps not put the master and worker in the same file.
//   //
//   // You can also of course get a bit fancier about logging, and
//   // implement whatever custom logic you need to prevent DoS
//   // attacks and other bad behavior.
//   //
//   // See the options in the cluster documentation.
//   //
//   // The important thing is that the master does very little,
//   // increasing our resilience to unexpected errors.

//   cluster.fork();
//   cluster.fork();

//   cluster.on('disconnect', (worker) => {
//     console.error('disconnect!');
//     cluster.fork();
//   });

// } else {
//   // the worker
//   //
//   // This is where we put our bugs!

//   const domain = require('domain');

//   // See the cluster documentation for more details about using
//   // worker processes to serve requests.  How it works, caveats, etc.

//   const server = require('http').createServer((req, res) => {
//     var d = domain.create();
//     d.on('error', (er) => {
//       console.error('error', er.stack);

//       // Note: we're in dangerous territory!
//       // By definition, something unexpected occurred,
//       // which we probably didn't want.
//       // Anything can happen now!  Be very careful!

//       try {
//         // make sure we close down within 30 seconds
//         var killtimer = setTimeout(() => {
//           process.exit(1);
//         }, 30000);
//         // But don't keep the process open just for that!
//         killtimer.unref();

//         // stop taking new requests.
//         server.close();

//         // Let the master know we're dead.  This will trigger a
//         // 'disconnect' in the cluster master, and then it will fork
//         // a new worker.
//         cluster.worker.disconnect();

//         // try to send an error to the request that triggered the problem
//         res.statusCode = 500;
//         res.setHeader('content-type', 'text/plain');
//         res.end('Oops, there was a problem!\n');
//       } catch (er2) {
//         // oh well, not much we can do at this point.
//         console.error('Error sending 500!', er2.stack);
//       }
//     });

//     // Because req and res were created before this domain existed,
//     // we need to explicitly add them.
//     // See the explanation of implicit vs explicit binding below.
//     d.add(req);
//     d.add(res);

//     // Now run the handler function in the domain.
//     d.run(() => {
//       handleRequest(req, res);
//     });
//   });
//   server.listen(PORT);
// }

// // This part isn't important.  Just an example routing thing.
// // You'd put your fancy application logic here.
// function handleRequest(req, res) {
//   switch(req.url) {
//     case '/error':
//       // We do some async stuff, and then...
//       setTimeout(() => {
//         // Whoops!
//         flerb.bark();
//       });
//       break;
//     default:
//       res.end('ok');
//   }
// }


// http.get({
//   hostname: 'localhost',
//   port: 8080,
//   path: '/',
//   agent: false
// },(res) => {
//   console.log(res);
// })

// process.on('uncaughtException', (err) => {
//   console.log(err);
// })

// var keepAliveAgent = new http.Agent({keepAlive: true});
// keepAliveAgent.createConnection()
// http.request({
//   agent:keepAliveAgent
// }, (res) => {
//   console.log(res);
// })

// const net = require('net');
// const client = net.createConnection({port: 8080}, () => {
//   //'connect' listener
//   console.log('connected to server!');
//   client.write('hello world!\r\n');
// });
// client.on('data', (data) => {
//   console.log(data.toString());
//   client.end();
// });
// client.on('end', () => {
//   console.log('disconnected from server');
// });


// const http = require('http');
// const net = require('net');
// const url = require('url');

// // 创建一个 HTTP 通道代理
// var proxy = http.createServer( (req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('okay');
// });
// proxy.on('connect', (req, cltSocket, head) => {
//   // 连接到一个来源服务器
//   var srvUrl = url.parse(`http://${req.url}`);
//   var srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
//     cltSocket.write('HTTP/1.1 200 连接已建立\r\n' +
//                     '委托代理: Node.js-代理\r\n' +
//                     '\r\n');
//     srvSocket.write(head);
//     srvSocket.pipe(cltSocket);
//     cltSocket.pipe(srvSocket);
//   });
// });

// // 现在代理正在运行
// proxy.listen(1337, '127.0.0.1', () => {

//   // 发送一个请求到通道代理
//   var options = {
//     port: 1337,
//     hostname: '127.0.0.1',
//     method: 'CONNECT',
//     path: 'www.baidu.com:80'
//   };

//   var req = http.request(options);
//   req.end();

//   req.on('connect', (res, socket, head) => {
//     console.log('got connected!');

//     // 发送一个请求到一个 HTTP 通道
//     socket.write('GET / HTTP/1.1\r\n' +
//                  'Host: www.baidu.com:80\r\n' +
//                  'Connection: close\r\n' +
//                  '\r\n');
//     socket.on('data', (chunk) => {
//       console.log(chunk.toString());
//     });
//     socket.on('end', () => {
//       proxy.close();
//     });
//   });
// });


// http.get('http://nodejs.org/dist/index.json', (res) => {
//   const statusCode = res.statusCode;
//   const contentType = res.headers['content-type'];

//   let error;
//   if (statusCode !== 200) {
//     error = new Error(`请求失败。\n` +
//                       `状态码: ${statusCode}`);
//   } else if (!/^application\/json/.test(contentType)) {
//     error = new Error(`无效的 content-type.\n` +
//                       `期望 application/json 但获取的是 ${contentType}`);
//   }
//   if (error) {
//     console.log(error.message);
//     // 消耗响应数据以释放内存
//     res.resume();
//     return;
//   }

//   res.setEncoding('utf8');
//   let rawData = '';
//   res.on('data', (chunk) => rawData += chunk);
//   res.on('end', () => {
//     try {
//       let parsedData = JSON.parse(rawData);
//       console.log(parsedData);
//     } catch (e) {
//       console.log(e.message);
//     }
//   });
// }).on('error', (e) => {
//   console.log(`错误: ${e.message}`);
// });



// const https = require('https');
// const fs = require('fs');

// const options = {
//   key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
//   cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
// };

// https.createServer(options, (req, res) => {
//   res.writeHead(200);
//   res.end('hello world\n');
// }).listen(8000);

 
// const EventEmitter = require('events');

// module.exports = new EventEmitter();

// setInterval(() => {
//   module.exports.emit('ready');
// }, 1000)
 
// const net = require('net');
// var server = net.createServer((socket) => {
//   socket.end('goodbye\n');
// }).on('error', (err) => {
//   // handle errors here
//   throw err;
// });
// var options = {
//   host: 'localhost',
//   port: 8080,
//   exclusive: true
// }
// // grab a random port.
// server.listen(options, () => {
//   console.log('opened server on', server.address());
// });


// const net = require('net');

// var socket = new net.Socket();
// socket.connect({
//   port: 8080
// },() => {
//   socket.write('hello socket!','utf8', () => {
//     console.log('msg send success');
//   });

// })
// socket.on('data', (data) => {
//   console.log(data.toString());
//   socket.end();
// })
// socket.on('end', () => {
//   console.log('end');
// })


// const os = require('os');

// console.log(os.cpus());
// console.log(os.constants);
// console.log(os.networkInterfaces());
// console.log(os.userInfo());
// 


// const path = require('path');

// console.log(path.basename('my.bat'))


// process.stdin.resume();
// process.on('SIGINT', () => {
//   console.log('Received SIGINT, Press CON+D to exit')
// })
// 
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// console.log(process.versions)
 

// const querystring = require('querystring');

// console.log(querystring.parse("http://fanyi.baidu.com/translate?aldtype=16047&query=twist&keyfrom=baidu&smartresult=dict&lang=auto2zh#en/zh/twist"));

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('你认为 Node.js 中文网怎么样？\n', (answer) => {
//   // 对答案进行处理
//   console.log(`多谢你的反馈：${answer}`);

//   rl.close();
// }); 


// const repl = require('repl');

// // var msg = 'message';
// // // repl.start('>').context.m = msg;
// // const r = repl.start('> ');
// // Object.defineProperty(r.context, 'm', {
// //   configurable: false,
// //   enumerable: true,
// //   value: msg
// // });

// var replServer = repl.start({prompt: '> '});
// replServer.defineCommand('sayhello', {
//   help: 'Say hello',
//   action: function(name) {
//     this.lineParser.reset();
//     this.bufferedCommand = '';
//     console.log(`Hello, ${name}!`);
//     this.displayPrompt();
//   }
// });
// replServer.defineCommand('saybye', function() {
//   console.log('Goodbye!');
//   this.close();
// });



// const http = require('http');

// const server = http.createServer( (req, res) => {
//   // req is an http.IncomingMessage, which is a Readable Stream
//   // res is an http.ServerResponse, which is a Writable Stream

//   let body = '';
//   // Get the data as utf8 strings.
//   // If an encoding is not set, Buffer objects will be received.
//   req.setEncoding('utf8');

//   // Readable streams emit 'data' events once a listener is added
//   req.on('data', (chunk) => {
//     body += chunk;
//   });

//   // the end event indicates that the entire body has been received
//   req.on('end', () => {
//     try {
//       const data = JSON.parse(body);
//       // write back something interesting to the user:
//       res.write(typeof data);
//       res.end();
//     } catch (er) {
//       // uh oh!  bad json!
//       res.statusCode = 400;
//       return res.end(`error: ${er.message}`);
//     }
//   });
// });

// server.listen(1337);

// $ curl localhost:1337 -d '{}'
// object
// $ curl localhost:1337 -d '"foo"'
// string
// $ curl localhost:1337 -d 'not json'
// error: Unexpected token o

// const StringDecoder = require('string_decoder').StringDecoder;
// const decoder = new StringDecoder('utf8');

// const cent = Buffer.from([0xC2, 0xA2]);
// console.log(decoder.write(cent));

// const euro = Buffer.from([0xE2, 0x82, 0xAC]);
// console.log(decoder.write(euro));


// const tls = require('tls');

// const dgram = require('dgram');
// const server = dgram.createSocket('udp4');

// server.on('error', (err) => {
//   console.log(`server error:\n${err.stack}`);
//   server.close();
// });

// server.on('message', (msg, rinfo) => {
//   console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
// });

// server.on('listening', () => {
//   var address = server.address();
//   console.log(`server listening ${address.address}:${address.port}`);
// });

// server.bind(41234);

// const util = require('util');
// const EventEmitter = require('events');

// function MyStream() {
//   EventEmitter.call(this);
// }

// util.inherits(MyStream, EventEmitter);

// MyStream.prototype.write = function(data) {
//   this.emit('data', data);
// };

// const stream = new MyStream();

// console.log(stream instanceof EventEmitter); // true
// console.log(MyStream.super_ === EventEmitter); // true

// stream.on('data', (data) => {
//   console.log(`接收的数据："${data}"`);
// });
// stream.write('运作良好！'); // 接收的数据："运作良好！"

// const v8 = require('v8');
// console.log(v8.getHeapStatistics())


// const util = require('util');
// const vm = require('vm');

// const sandbox = {
//   animal: 'cat',
//   count: 2
// };

// const script = new vm.Script('count += 1; name = "kitty";');

// const context = new vm.createContext(sandbox);
// for (var i = 0; i < 10; ++i) {
//   script.runInContext(context);
// }

// console.log(util.inspect(sandbox));

// 'use strict';
// const vm = require('vm');

// let code =
// `(function(require) {

//    const http = require('http');

//    http.createServer( (request, response) => {
//      response.writeHead(200, {'Content-Type': 'text/plain'});
//      response.end('Hello World\\n');
//    }).listen(8124);

//    console.log('Server running at http://127.0.0.1:8124/');
//  })`;

//  vm.runInThisContext(code)(require);

// const zlib = require('zlib');

// const gzip = zlib.createGzip();
// const fs = require('fs');
// const inp = fs.createReadStream('input.txt');
// const out = fs.createWriteStream('input.txt.gz');

// inp.pipe(gzip).pipe(out);


// const zlib = require('zlib');
// const http = require('http');

// http.createServer((request, response) => {
//   // For the sake of simplicity, the Accept-Encoding checks are omitted.
//   response.writeHead(200, { 'content-encoding': 'gzip' });
//   const output = zlib.createGzip();
//   output.pipe(response);

//   setInterval(() => {
//     output.write(`The current time is ${Date()}\n`, () => {
//       // The data has been passed to zlib, but the compression algorithm may
//       // have decided to buffer the data for more efficient compression.
//       // Calling .flush() will make the data available as soon as the client
//       // is ready to receive it.
//       output.flush();
//     });
//   }, 1000);
// }).listen(1337);

// var express = require('express');

// var app = express(); // the main app
// var admin = express(); // the sub app

// admin.get('/', function (req, res) {
//   console.log(admin.mountpath); // /admin
//   res.send('Admin Homepage');
// })

// app.use('/admin', admin); // mount the sub app
// app.listen(3000);

// const http = require('http');
// var server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type' : 'text/html'
//     });
//     res.write('<h1>hello world!</h1>');
//     res.end();
// });
// server.listen(8000);
// console.log('listening:8000')

const express = require('express');
var app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    users = [];
app.use('/', express.static(__dirname + '/www'));//指定静态html文件位置
const port = process.env.PORT || 80;
server.listen(port, function(){
});

io.on('connection', (socket) => {
    socket.on('login', (nickname) => {
        if(users.indexOf(nickname) > -1){
            socket.emit('nickExisted');
        }else{
            socket.uesrIndex = users.length;
            socket.nickname = nickname;
            users.push(nickname);
            socket.emit('loginSuccess', users.length);
            socket.broadcast.emit('system', nickname, users.length, 'login');//向所有连接到服务器的客户端发送当前登陆用户的昵称 
            //io.sockets.emit('system', nickname);
        }
    });
    socket.on('disconnect', () => {
        users.splice(socket.userIndex, 1);
        socket.broadcast.emit('system', socket.nickname, users.length, 'disconnect');
    });
    socket.on('postMsg', (msg, color) => {
        socket.broadcast.emit('newMsg',socket.nickname, msg, color);
    });
    socket.on('img', (imgData) => {
        socket.broadcast.emit('newImg', socket.nickname, imgData);
    })
});
