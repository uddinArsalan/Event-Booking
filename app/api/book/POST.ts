import { NextRequest, NextResponse } from "next/server";
import { users, events, bookings } from "@/app/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { userId, eventId } = await req.json();
    const user = users.find((u) => u.id === userId);
    const event = events.find((e) => e.id === eventId);
    if (!user || !event) {
      return NextResponse.json(
        { message: "Invalid user or event" },
        { status: 400 }
      );
    }
    const alreadyBooked = bookings.find(
      (b) => b.userId === userId && b.eventId === eventId
    );
    if (alreadyBooked) {
      return NextResponse.json(
        { message: "User already booked this event" },
        { status: 400 }
      );
    }
    const currentCount = bookings.filter((b) => b.eventId === eventId).length;
    if (currentCount >= event.maxCapacity) {
      return NextResponse.json(
        { message: "Event is fully booked" },
        { status: 400 }
      );
    }
    bookings.push({ userId, eventId });
    return NextResponse.json(
      { message: "Booking successful" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Booking Failed" }, { status: 500 });
  }
}
