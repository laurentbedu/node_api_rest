const express = require("express");
const Router = express.Router;

class BaseRouter {

  constructor() {
    this.router = Router();
    this.name = this.constructor.name.replace(`Router`,``);
    this.table = this.name.toLowerCase();
    this.initializeRoutes();
  }

  initializeRoutes = () => {
    //get all db contact table rows
    this.router.get("/", async (req, res) => {
      res.send(`get all ${this.table} rows`);
    });
    //get one db contact table row
    this.router.get("/:id", async (req, res) => {
      res.send(`get one ${this.table} row with id=${req.params.id}`);
    });
    //post to create one row in db table contact
    this.router.post("/", async (req, res) => {
      res.send(`create one ${this.table} row`);
    });
    //put to update one row in db table contact
    this.router.put("/:id", async (req, res) => {
      res.send(`update one ${this.table} row with id=${req.params.id}`);
    });
    //delete to destroy one row in db table contact
    this.router.delete("/:id", async (req, res) => {
      res.send(`delete one ${this.table} row with id=${req.params.id}`);
    });
  };
}
module.exports = BaseRouter;

