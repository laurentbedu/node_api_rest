const dbConfig = require('../config/db.config');
const mysql = require('mysql');

class BaseService{

    static connection;
    static connect = () => {
        if(!BaseService.connection){
            BaseService.connection = mysql.createPool({
                host: dbConfig.HOST,
                port: dbConfig.PORT,
                user: dbConfig.USER,
                password: dbConfig.PASS,
                database: dbConfig.NAME
              });
        }
        return BaseService.connection;
    }

    static executeQuery = async (sql) => {
        const result =
            await new Promise((resolve, reject)=>{
                BaseService.connect().query(sql,  (err, rows)=>{
                    if(err){
                        return reject(err);
                    }
                    return resolve(rows);
                });
            });  
        return result;
    }

}

module.exports = BaseService;