
import mongoose from "mongoose";


const questionSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    subject: { type: String, required: true },
    topic: { type: String, required: true },
    difficulty: { type: String, required: true },
    question: { type: String, required: true },
    options: [String],
    correctAnswer: { type: String, required: true },
  },
  { timestamps: true }
);



export default mongoose.model("Question", questionSchema);
