let Excuses = require('../models/Excuses')

let excusesController = {
  index: async (req, res) => {
    try {
      const excuses = await Excuses.find({});
      res.json(excuses);
    } catch (err) {
      console.log(err);
    }
  },
  show: async (req, res) => {
    try {
      const excusesId = req.params.id;
      const excuses = await Excuses.findById(excusesId);
      res.json(excuses);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  create: async (req, res) => {
    try {
      const newExcuse = req.body;
      const savedExcuse = await Excuses.create(newExcuse);
      res.json(savedExcuse);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  update: async (req, res) => {
    try {
      const excuseId = req.params.id;
      const updatedExcuse = req.body;
      const savedExcuse = await Excuses.findbyIdAndUpdate(
        excuseId,
        updatedExcuse,
        { new: true }
      );
      res.json(savedExcuse);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  delete: async (req, res) => {
    try {
      const excuseId = req.params.id;
      await Excuses.findByIdAndRemove(excuseId);
      res.json({
        msg: "Succssfully Deleted"
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = excusesController;
