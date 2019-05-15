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
      const excusesId = req.params.id
      const excuses = await excuses.findById(excusesId)
      res.json(excuses)
    } catch (err) {
      console.log(err)
      res.json(err)
    }
  },
  
};


