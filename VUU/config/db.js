import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/regismteer");
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
