const dbConfig = require('../config/db.config');
const mysql = require('mysql');

class BaseService{

    constructor() {
        this.name = this.constructor.name.replace(`Service`, ``);
        this.table = this.name.toLowerCase();
      }


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

    selectAll = async () => {
        const sql = `SELECT * FROM ${this.table} WHERE deleted = 0`;
        const rows = await BaseService.executeQuery(sql);
        return rows;
    }

    selectOne = async (id) => {
        const sql = `SELECT * FROM ${this.table} WHERE deleted = 0 AND id=${id}`;
        const rows = await BaseService.executeQuery(sql);
        const row = rows.length === 1 ? rows.pop() : null;
        return row;
    }

    insertOne = async (params) => {
        return true;
        //return false ou la ligne insérée
    }

}

module.exports = BaseService;