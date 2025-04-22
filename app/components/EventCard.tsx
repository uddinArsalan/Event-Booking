import { useState } from "react";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { Ticket } from "lucide-react";
import { Event } from "../types";
import axios from "axios";
import { useApp } from "@/context/AppProvider";

interface EventCardProps {
  event: Event;
  refetchEvents: () => void;
}

export default function EventCard({ event, refetchEvents }: EventCardProps) {
  const { currentUserId } = useApp();
  const [loading, setLoading] = useState(false);

  const bookEvent = async (eventId: string) => {
    setLoading(true);
    try {
      await axios.post("/api/book", {
        userId: currentUserId,
        eventId,
      });
      toast.success("Event booked successfully!");
      refetchEvents();
    } catch (err) {
      toast.error("Failed to book event");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = event.remainingSpots === 0 || event.isBooked || loading;

  return (
    <div className="relative border rounded-lg p-5 shadow-md bg-white dark:bg-zinc-900 transition hover:shadow-lg">
      <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        {event.title}
      </h2>
      <p className="text-zinc-600 dark:text-zinc-300">{event.description}</p>
      <p className="text-zinc-600 dark:text-zinc-300">
        Start: {format(new Date(event.startTime), "PPp")}
      </p>
      <p className="text-zinc-600 dark:text-zinc-300">
        Remaining Spots: {event.remainingSpots}
      </p>
      <button
        onClick={() => bookEvent(event.id)}
        disabled={isDisabled}
        className={`mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white text-sm font-medium transition-all duration-200
          ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
      >
        {loading ? (
          <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></span>
        ) : (
          <Ticket className="h-4 w-4" />
        )}
        {loading ? "Booking..." : event.isBooked ? "Already Booked" : "Book"}
      </button>
      <div className="text-green-500 font-semibold text-sm absolute right-6 bottom-6">
        {event.remainingSpots == 0 && "No spot available"}
      </div>
    </div>
  );
}
