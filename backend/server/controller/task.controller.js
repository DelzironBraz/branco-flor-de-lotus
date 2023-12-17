import User from "../../model/User.js";
import Task from "../../model/Task.js";

const addTask = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { description, dueDate } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const newTask = new Task({
      description,
      dueDate,
      user: userId,
    });

    await newTask.save();

    res.status(201).send({ message: "Task added successfully", task: newTask });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).send({ message: "Task not found" });
    }

    res.status(200).send(task);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { description, dueDate } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { description, dueDate },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).send({ message: "Task not found" });
    }

    res.status(200).send({ message: "Task updated successfully", task: updatedTask });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const removeTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const removedTask = await Task.findByIdAndRemove(taskId);

    if (!removedTask) {
      return res.status(404).send({ message: "Task not found" });
    }

    res.status(200).send({ message: "Task removed successfully", task: removedTask });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { addTask, findAll, findById, updateTask, removeTask };