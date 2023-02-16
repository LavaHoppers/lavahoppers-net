
import { createServer } from 'http';
import { promises as fs } from 'fs';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';


const port = 80;

const requestListener = (req, res) => {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

const server = createServer(requestListener);

server.listen(port, () => {
    console.log(`Server is running on http://'localhost:${port}`);
});