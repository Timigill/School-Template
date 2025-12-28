import path from "path";
import fs from "fs";
import Faculty from "@/models/Faculty";
import connectMongo from "@/lib/mongodb";

export const config = { api: { bodyParser: false } };

// Helper to save uploaded image
async function saveFile(file) {
  if (!file || file.size === 0) return "";
  const uploadsDir = path.join(process.cwd(), "/public/uploads");
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

  const filePath = path.join(uploadsDir, file.name);
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filePath, buffer);

  return `/uploads/${file.name}`;
}

// GET all faculties
export async function GET() {
  try {
    await connectMongo();
    const faculties = await Faculty.find();
    return new Response(JSON.stringify(faculties), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to fetch faculty", { status: 500 });
  }
}

// POST new faculty
export async function POST(req) {
  try {
    await connectMongo();
    const formData = await req.formData();

    const facultyData = {
      name: formData.get("name"),
      role: formData.get("role"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      department: formData.get("department") || "",
      qualification: formData.get("qualification") || "",
    };

    const imageFile = formData.get("image");
    facultyData.image = await saveFile(imageFile);

    const faculty = await Faculty.create(facultyData);
    return new Response(JSON.stringify(faculty), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to create faculty", { status: 500 });
  }
}

// PUT (update) faculty
export async function PUT(req) {
  try {
    await connectMongo();
    const formData = await req.formData();

    const id = formData.get("id");
    if (!id) return new Response("Faculty ID is required", { status: 400 });

    const updateData = {
      name: formData.get("name"),
      role: formData.get("role"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      department: formData.get("department") || "",
      qualification: formData.get("qualification") || "",
    };

    const imageFile = formData.get("image");
    if (imageFile && imageFile.size > 0) {
      updateData.image = await saveFile(imageFile);
    }

    const updated = await Faculty.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to update faculty", { status: 500 });
  }
}

// DELETE faculty
export async function DELETE(req) {
  try {
    await connectMongo();
    const { id } = await req.json();
    if (!id) return new Response("Faculty ID is required", { status: 400 });

    await Faculty.findByIdAndDelete(id);
    return new Response("Faculty deleted", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to delete faculty", { status: 500 });
  }
}
