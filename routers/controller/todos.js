const someModel = require("./../../db/models/Schema");





const addTask = (req, res) => {
  const { task } = req.body;

  const newTask = new someModel({
    task
  });

  newSomeData
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};


const displayTasks = (req, res) =>{
  someModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { addTask, displayTasks };