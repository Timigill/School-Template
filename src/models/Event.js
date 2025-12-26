import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: [true, "Time is required"], trim: true, minlength: 1 },
  location: { type: String, required: [true, "Location is required"], trim: true, minlength: 1 },
  description: { type: String, required: true },
});


const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);

export default Event;
