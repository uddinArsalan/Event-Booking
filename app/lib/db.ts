import { User, Event, Booking } from "../types";

export const users: User[] = [
  { id: "1", name: "Arsalan", email: "arsalan@example.com" },
  { id: "2", name: "Jane Doe", email: "jane@example.com" },
  { id: "3", name: "John Smith", email: "john@example.com" },
];

export const events: Omit<Event, "remainingSpots" | "isBooked">[] = [
  {
    id: "1",
    title: "React Conference 2025",
    description: "Deep dive into React, Next.js, and TypeScript.",
    startTime: "2025-05-15T10:00:00",
    maxCapacity: 2,
  },
  {
    id: "2",
    title: "Node.js Bootcamp",
    description: "Learn backend development with Node.js.",
    startTime: "2025-06-10T14:00:00",
    maxCapacity: 3,
  },
  {
    id: "3",
    title: "Design Systems Summit",
    description: "Explore modern UI/UX and design principles.",
    startTime: "2025-07-01T09:30:00",
    maxCapacity: 1,
  },
];

export let bookings: Booking[] = [
  { userId: "1", eventId: "1" },
  { userId: "2", eventId: "1" },
];
