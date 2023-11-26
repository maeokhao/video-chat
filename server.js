const express = require("express");
const http = require("http");
const port = "5000";
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const iow = socket(server);


server.listen(port, () => console.log("server is running on port", port));
