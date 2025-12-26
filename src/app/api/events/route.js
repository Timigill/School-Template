import connectToDB from "@/lib/mongodb";
import Event from "@/models/Event";

export async function GET() {
  try {
    await connectToDB();
    const events = await Event.find({}).sort({ date: 1, time: 1 });
    return new Response(JSON.stringify(events), { status: 200 });
  } catch (err) {
    console.error("GET /api/events error:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch events" }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("POST /api/events payload:", body);  // <-- yahan log lagao

    const { title, date, time, location, description } = body;

    if (!title || !date || !time || !location || !description)
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });

    await connectToDB();
    const newEvent = await Event.create({ 
      title: title.trim(), 
      date: new Date(date), 
      time: time.trim(), 
      location: location.trim(), 
      description: description.trim() 
    });
    console.log("Event created:", newEvent);  // <-- check DB object
    return new Response(JSON.stringify(newEvent), { status: 201 });
  } catch (err) {
    console.error("POST /api/events error:", err);
    return new Response(JSON.stringify({ error: "Failed to create event" }), { status: 500 });
  }
}


export async function PUT(req) {
  try {
    const body = await req.json();
    console.log("PUT /api/events payload:", body);  // <-- yahan log lagao

    const { id, title, date, time, location, description } = body;

    if (!id || !title || !date || !time || !location || !description)
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });

    await connectToDB();
    const updated = await Event.findByIdAndUpdate(
      id,
      { 
        title: title.trim(), 
        date: new Date(date), 
        time: time.trim(), 
        location: location.trim(), 
        description: description.trim() 
      },
      { new: true, runValidators: true }  // <-- validators run karwana important
    );
    console.log("Event updated:", updated);  // <-- check DB object

    if (!updated)
      return new Response(JSON.stringify({ error: "Event not found" }), { status: 404 });

    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (err) {
    console.error("PUT /api/events error:", err);
    return new Response(JSON.stringify({ error: "Failed to update event" }), { status: 500 });
  }
}


export async function DELETE(req) {
  try {
    const { id } = await req.json();
    if (!id) return new Response(JSON.stringify({ error: "Missing id" }), { status: 400 });

    await connectToDB();
    const deleted = await Event.findByIdAndDelete(id);

    if (!deleted)
      return new Response(JSON.stringify({ error: "Event not found" }), { status: 404 });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("DELETE /api/events error:", err);
    return new Response(JSON.stringify({ error: "Failed to delete event" }), { status: 500 });
  }
}
