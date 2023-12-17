import User from "../../model/User.js";

const findAll = async (req, res) => {
  try {
    const users = await User.find({ userId: req.userId });

    if (users.length === 0) {
      return res.status(404).send({ message: "There are no registered users for the current user" });
    }

    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req, res) => {
  try {
    const userId = req.userId;
    const id = req.params.id;

    const user = await User.findOne({ _id: id, userId });

    if (!user) {
      return res.status(404).send({ message: "User not found for the current user" });
    }

    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.userId;
    const id = req.params.id;

    const { name, email, password } = req.body;

    if (!name && !email && !password) {
      return res.status(400).send({ message: "Submit at least one field for update" });
    }

    const updatedUser = await User.findOneAndUpdate({ _id: id, userId }, { name, email, password }, { new: true });

    if (!updatedUser) {
      return res.status(404).send({ message: "User not found for the current user" });
    }

    res.send({ message: "User successfully updated", user: updatedUser });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const removeUser = async (req, res) => {
  try {
    const userId = req.userId;
    const id = req.params.id;

    const removedUser = await User.findOneAndDelete({ _id: id, userId });

    if (!removedUser) {
      return res.status(404).send({ message: "User not found for the current user" });
    }

    res.send({ message: "User successfully deleted", user: removedUser });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { findAll, findById, updateUser, removeUser };