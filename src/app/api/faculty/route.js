import Faculty from "@/models/Faculty";
import connectMongo from "@/lib/mongodb";

export async function GET() {
  try {
    await connectMongo();
    const faculties = await Faculty.find();
    return new Response(JSON.stringify(faculties), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch faculty", { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectMongo();
    const data = await request.json();
    const faculty = await Faculty.create(data);
    return new Response(JSON.stringify(faculty), { status: 201 });
  } catch (err) {
    return new Response("Failed to create faculty", { status: 500 });
  }
}

export async function PUT(request) {
  try {
    await connectMongo();
    const { id, ...rest } = await request.json();
    const updated = await Faculty.findByIdAndUpdate(id, rest, { new: true });
    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (err) {
    return new Response("Failed to update faculty", { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    await connectMongo();
    const { id } = await request.json();
    await Faculty.findByIdAndDelete(id);
    return new Response("Faculty deleted", { status: 200 });
  } catch (err) {
    return new Response("Failed to delete faculty", { status: 500 });
  }
}
