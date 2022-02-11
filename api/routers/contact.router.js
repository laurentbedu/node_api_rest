const express = require('express');
const Router = express.Router;
const router = Router();
//get all db contact table rows
router.get('/', async (req, res) => {
    res.send("get all contact rows");
})
//get one db contact table row
router.get('/:id', async (req, res) => {
    res.send(`get one contact row with id=${req.params.id}`);
})
//post to create one row in db table contact
router.post('/', async (req, res) => {
    res.send(`create one contact row`);
})
//put to update one row in db table contact
router.put('/:id', async (req, res) => {
    res.send(`update one contact row with id=${req.params.id}`);
})
//delete to destroy one row in db table contact
router.delete('/:id', async (req, res) => {
    res.send(`delete one contact row with id=${req.params.id}`);
})
module.exports = router;
