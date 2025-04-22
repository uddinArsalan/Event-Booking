import { NextRequest, NextResponse } from "next/server";
import { events } from "@/app/lib/db";
import { uuidv4 } from "@/app/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const { title, description, maxCapacity, startTime } = await req.json();

    if (!title || !description || maxCapacity == 0 || !startTime) {
      return NextResponse.json(
        { message: "Invalid event , missing required fields" },
        { status: 400 }
      );
    }
    events.push({ id: uuidv4(), title, description, maxCapacity, startTime });
    return NextResponse.json({ message: "Event Created" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failing while creating event" },
      { status: 500 }
    );
  }
}
