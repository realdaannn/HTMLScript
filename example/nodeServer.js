/*  Copyright Daniel Rooke 09/23/2022*/

const { createVerify } = require('crypto');
const http = require('http');
const fs = require('fs');
const htmls = require('../htmls');


const server = http.createServer(async (req, res) => {
    console.log("new request..." + req.url)
    if(req.url === '/'){
        //Server home directory of website
        res.statusCode = 200;
        res.writeHead(200, {'content-type': 'text/html'})
        var pagedata = null;
        
        //Start reading the requested page for parsing
        fs.readFile('index.htmls', 'utf8', (err, pagedata) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("read file, starting htmls")
            //parse the data read from file
            pagedata = htmls.parseHTMLS(pagedata);
            //write and send the formatted data to the client
            res.write(pagedata);
            res.end();
        });

    }
    else if(req.url.includes(".css")){
        console.log("requested css" + req.url)
        var fileStream = fs.createReadStream("css" + req.url, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    }
    else{
        res.statusCode = 404;
        res.write('Error 404: Page not found')
        res.end();
    }
});


server.on('connection', socket => {
    console.log("new connection")
})


server.listen(8080);

console.log('Listening on port 8080')




