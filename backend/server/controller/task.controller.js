import User from "../../model/User.js";
import Task from "../../model/Task.js";

const addTask = async (req, res) => {
  try {
    
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    
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
