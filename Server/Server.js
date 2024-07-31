const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT;

const Server = express();

Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));

// Add cookie parser middleware before other routes and middleware
Server.use(cookieParser());

Server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
