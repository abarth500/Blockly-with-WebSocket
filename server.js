#! /usr/bin/env node

const http = require('http'),
    ws = require('ws'),
    fs = require('fs'),
    path = require('path'),
    async = require('async');

const values = {
    'html': path.join(__dirname, 'client.html'),
    'js': {
        '/blockly-websocket.js': path.join(__dirname, 'blockly-websocket.js'),
        '/blockly-websocket-blocks.js': path.join(__dirname, 'blockly-websocket-blocks.js'),
        '/blockly-websocket-msg-ja.js': path.join(__dirname, 'blockly-websocket-msg-ja.js')
    },
    'http': 8080,
    'websocket': 8081
};

async.mapValues(values,
    (val, key, callback) => {
        switch (key) {
            case 'html':
                fs.readFile(val, 'binary', callback);
                break;
            case 'js':
                callback(null, val);
                break;
            case 'http':
                const httpd = http.createServer();
                httpd.listen(val);
                callback(null, httpd);
                break;
            case 'websocket':
                const wss = new ws.Server({ port: val });
                callback(null, wss);
                break;
            default:
            // Noting to do...
        }
    }, (err, $) => {
        if (err) {
            throw new Error('Init Error:' + JSON.stringify(err));
        }
        $['http'].on('request', (request, response) => {
            console.log(request.url);
            if (request.url.endsWith('.js') && $['js'][request.url]) {
                let header = {
                    'Content-Type': 'text/javascript',
                    'Access-Control-Allow-Origin': '*',
                    'Pragma': 'no-cache',
                    'Cache-Control': 'no-cache'
                }
                fs.readFile($['js'][request.url], 'binary', (err, body) => {
                    if (err) {
                        console.log(err);
                        response.writeHead(400, { 'Content-Type': 'text/plain' });
                        response.end();
                    } else {
                        console.log("[LOAD]", $['js'][request.url]);
                        response.writeHead(200, header);
                        response.write(body, 'binary');
                        response.end();
                    }
                });
            } else if (request.url == "/") {
                let header = {
                    'Content-Type': 'text/html',
                    'Access-Control-Allow-Origin': '*',
                    'Pragma': 'no-cache',
                    'Cache-Control': 'no-cache'
                }
                response.writeHead(200, header);
                response.write($['html'], 'binary');
                response.end();
            } else {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end();
            }
        });
        $['websocket'].on('connection', (client) => {
            console.log('Connect');
            client.on('close',()=>{
                console.log('Close');
            });
            client.on('message', (message) => {
                console.log("  Client said '" + message + "'");
                $['websocket'].clients.forEach((_client) => {
                    if (_client.readyState === ws.OPEN) {
                        _client.send("Server said '" + message + "'");
                    }
                });
            });
        });

    });