import path from "path";
import fs from "fs";
import connectToDB from "@/lib/mongodb";
import Event from "@/models/Event";


export const bodyParser = false;
export const dynamic = "force-dynamic";
export const runtime = "nodejs";


// helper: save image
async function saveFile(file) {
  if (!file || file.size === 0) return "";

  const uploadDir = path.join(process.cwd(), "public/uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filePath = path.join(uploadDir, file.name);
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filePath, buffer);

  return `/uploads/${file.name}`;
}

// GET all events
export async function GET() {
  try {
    await connectToDB();
    const events = await Event.find({}).sort({ date: 1, time: 1 });
    return new Response(JSON.stringify(events), { status: 200 });
  } catch (err) {
    console.error("GET /api/events error:", err);
    return new Response("Failed to fetch events", { status: 500 });
  }
}

// CREATE event (with image upload)
export async function POST(req) {
  try {
    await connectToDB();
    const formData = await req.formData();

    const title = formData.get("title");
    const date = formData.get("date");
    const time = formData.get("time");
    const location = formData.get("location");
    const description = formData.get("description");
    const imageFile = formData.get("image");

    if (!title || !date || !time || !location || !description || !imageFile) {
      return new Response("Missing fields", { status: 400 });
    }

    const imagePath = await saveFile(imageFile);

    const event = await Event.create({
      title: title.trim(),
      date: new Date(date),
      time: time.trim(),
      location: location.trim(),
      description: description.trim(),
      image: imagePath,
    });

    return new Response(JSON.stringify(event), { status: 201 });
  } catch (err) {
    console.error("POST /api/events error:", err);
    return new Response("Failed to create event", { status: 500 });
  }
}

// UPDATE event (image optional)
export async function PUT(req) {
  try {
    await connectToDB();
    const formData = await req.formData();

    const id = formData.get("id");
    if (!id) return new Response("Event ID required", { status: 400 });

    const updateData = {
      title: formData.get("title")?.trim(),
      date: new Date(formData.get("date")),
      time: formData.get("time")?.trim(),
      location: formData.get("location")?.trim(),
      description: formData.get("description")?.trim(),
    };

    const imageFile = formData.get("image");
    if (imageFile && imageFile.size > 0) {
      updateData.image = await saveFile(imageFile);
    }

    const updated = await Event.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return new Response("Event not found", { status: 404 });
    }

    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (err) {
    console.error("PUT /api/events error:", err);
    return new Response("Failed to update event", { status: 500 });
  }
}

// DELETE event
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    if (!id) return new Response("Missing id", { status: 400 });

    await connectToDB();
    const deleted = await Event.findByIdAndDelete(id);

    if (!deleted) return new Response("Event not found", { status: 404 });

    return new Response("Event deleted", { status: 200 });
  } catch (err) {
    console.error("DELETE /api/events error:", err);
    return new Response("Failed to delete event", { status: 500 });
  }
}
