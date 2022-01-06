const http = require("http");
const express = require("express");
const app = express();

const indexRouter = require('./routes/main');

app.use("/user", indexRouter);
app.use("/", indexRouter);
const port =process.env.PORT|| 3000;
app.listen(port,()=>{
    console.log(`server is  running on port ${port}`)
})