const BaseService = require('../services/base.service')

class BaseController {
    
  constructor() {
    this.name = this.constructor.name.replace(`Controller`, ``);
    this.table = this.name.toLowerCase();
  }

  getAll = async () => {
    const sql = `SELECT * FROM ${this.table}`;
    const result = await BaseService.executeQuery(sql);
    return result;
  };

  getOne = (id) => {
    return `get one ${this.table} row with id=${id}`;
  };

  createOne = () => {
    return `create one ${this.table} row`;
  };

  updateOne = (id) => {
    return `update one ${this.table} row with id=${id}`;
  };

  deleteOne = (id) => {
    return `delete one ${this.table} row with id=${id}`;
  };
}
module.exports = BaseController;
