const express = require("express");

const app = express();

app.use(express.json());

const routers = require('./api/routers');
for(const route in routers){
    app.use(`/${route}`, new routers[route]().router);
}

app.use('/', function(req, res){
    res.send("ok");
});

//TEST
// const BaseService = require('./api/services/base.service');
// const sql = "SELECT * FROM test WHERE id=1"; 
// const test = async () => {
//     const result = await BaseService.executeQuery(sql);
//     const bp = 1; 
// }
// test();


const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});