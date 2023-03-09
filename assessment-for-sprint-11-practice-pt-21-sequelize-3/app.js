require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();
const { WarehouseItem } = require('./db/models')

app.use(express.json());


app.get('/items', async (req, res, next) => {
  const newItem = await WarehouseItem.findAll({where:{isUsed:false}})
  res.json(newItem)
})

app.put('/items/:itemId', async (req, res, next) => {
  try {
    const newItem = await WarehouseItem.findByPk(req.params.itemId)
    const {name, price, quantity, isUsed} = req.body
    newItem.name = name
    newItem.price = price
    newItem.quantity = quantity
    newItem.isUsed = isUsed

    newItem.save()
    res.json(newItem)
  } catch (error) {
    res.statusCode = 404
    res.json({
      message: "Warehouse Item not found"
    })
  }
})

app.get('items/:name', async (req, res, next) => {
  
})

if (require.main === module) {
  const port = 3000;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}
