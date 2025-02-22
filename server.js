const http = require('http');

    const fs = require('fs');



    const port = process.env.PORT || 3000;



    const server = http.createServer((req, res) => {

        const filePath = './index.html'; // Path to your main HTML file



        fs.readFile(filePath, (err, data) => {

            if (err) {

                res.writeHead(404, {'Content-Type': 'text/html'});

                return res.end('File not found');

            }

            res.writeHead(200, {'Content-Type': 'text/html'});

            res.write(data);

            res.end();

        });

    });



    server.listen(port, () => {

        console.log(`Server listening on port ${port}`);

    });