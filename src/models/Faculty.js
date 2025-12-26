import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }, // e.g., "Teacher", "Admin"
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  joinedAt: { type: Date, default: Date.now },
});

const Faculty = mongoose.models.Faculty || mongoose.model("Faculty", FacultySchema);
export default Faculty;
