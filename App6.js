require("dotenv").config();

const Server = require("./models/Server5");
const server = new Server();
server.listen();
