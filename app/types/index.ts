export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startTime: string;
  maxCapacity: number;
  remainingSpots: number;
  isBooked: boolean;
}

export interface Booking {
  userId: string;
  eventId: string;
}
