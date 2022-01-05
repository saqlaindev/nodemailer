const http = require("http");
const express = require("express");
const app = express();
const server=http.createServer(app)  // create server

const indexRouter = require('./routes/main');


app.use("/user", indexRouter);
app.use("/", indexRouter);





const port =process.env.PORT|| 5000;
server.listen(port,()=>{
    console.log(`server is  running on port ${port}`)
})