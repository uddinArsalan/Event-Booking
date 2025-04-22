import { NextRequest, NextResponse } from "next/server";
import { events, bookings } from "@/app/lib/db";

export async function GET(
  req: NextRequest,
) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ message: "Missing userId" }, { status: 400 });
  }
  try {
    const allEvents = events.map((event) => {
      const eventBookings = bookings.filter((b) => b.eventId === event.id);
      const remainingSpots = event.maxCapacity - eventBookings.length;
      const isBooked = eventBookings.some((b) => b.userId === userId);
      return {
        ...event,
        remainingSpots: remainingSpots,
        isBooked,
      };
    });
    return NextResponse.json(
      { events: allEvents, message: "Events fetched successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error fetching events" },
      { status: 500 }
    );
  }
}
