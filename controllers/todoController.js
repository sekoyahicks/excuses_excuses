let todoController = {
    index: async (req, res) => {
      try {
        const todoItems = await todoItems.find({});
        res.json(todoItems);
      } catch (err) {
        console.log(err);
      }
    },
    show: async (req, res) => {
      try {
        const todoItemId = req.params.id;
        const todoItem = await todoItem.findById(todoItemId);
        res.json(todoItem);
      } catch (err) {
        console.log(err);
        res.json(err);
      }
    },
    create: async (req, res) => {
      try {
        const newTodoItem = req.body;
        const savedTodoItem
         = await todoController.create(newTodoItem);
        res.json(savedTodoItem
            );
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },
    update: async (req, res) => {
      try {
        const todoItemId = req.params.id;
        const updatedTodoItem = req.body;
        const savedTodoItem
         = await todoItemId.findbyIdAndUpdate(
          todoItemId,
          updatedTodoItem,
          { new: true }
        );
        res.json(savedTodoItem
            );
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },
    delete: async (req, res) => {
      try {
        const todoItemId = req.params.id;
        await todoItemId.findByIdAndRemove(todoItemId);
        res.json({
          msg: "Succssfully Deleted"
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  };
  