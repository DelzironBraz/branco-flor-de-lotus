import mongoose from "mongoose";

const connectBatabase = () => {
  mongoose
    .connect(process.env.MONGODB_KEY)
    .then(() => console.log("Connection to MongoDB established"))
    .catch((err) => console.log("Connection error:" + err));
};

export default connectBatabase;
