import User from "../../model/User.js";
import jwt from 'jsonwebtoken';

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    const saveUser = await newUser.save();

    try {
    
      const token = jwt.sign({ userId: saveUser._id }, 'key', { expiresIn: '2h' });

      res.status(201).json({ message: "User created successfully", user: saveUser, token });
    } catch (tokenError) {

      console.error("Error generating token:", tokenError);
      res.status(500).send({ error: "Error generating authentication token", message: tokenError.message });
    }
  } catch (err) {
    res
      .status(500)
      .send({ Error: "Error creating user", message: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).json({ error: err.message });
    }
    
    const isPasswordValid = await User.findOne({ password: password });
    if (!isPasswordValid) {
      console.log(isPasswordValid);
      res.status(401).json({ error: err.message });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { signUp, signIn };