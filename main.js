const express = require("express");

const app = express();

const routers = require('./api/routers');
for(const route in routers){
    app.use(`/${route}`, new routers[route]().router);
}

app.use('/', function(req, res){
    res.send("ok");
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});