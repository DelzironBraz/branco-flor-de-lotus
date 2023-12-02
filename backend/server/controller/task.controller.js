import User from "../../model/User.js";
import Task from "../../model/Task.js";

const addTask = async (req, res) => {
  try {
    const userId = req.params.userId;
    const taskData = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    const newTask = new Task({
      userId: userId,
      title: taskData.title,
    });

    user.tasks.push(newTask);
    await user.save();

    res.status(201).json({ message: "Task created successfully", user: user });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    const tasks = await user.tasks;

    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const removeTask = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { addTask, findAll, findById, updateTask, removeTask };
