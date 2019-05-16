let excusesController = {
  index: async (req, res) => {
    try {
      const excuses = await excuses.find({});
      res.json(excuses);
    } catch (err) {
      console.log(err);
    }
  },
  show: async (req, res) => {
    try {
      const excusesId = req.params.id;
      const excuses = await excuses.findById(excusesId);
      res.json(excuses);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  create: async (req, res) => {
    try {
      const newExcuse = req.body;
      const savedExcuse = await excusesController.create(newExcuse);
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
      const savedExcuse = await excuseId.findbyIdAndUpdate(
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
      await excuseId.findByIdAndRemove(excuseId);
      res.json({
        msg: "Succssfully Deleted"
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};
