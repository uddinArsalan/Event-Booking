"use client";
import { useEffect, useState, useMemo } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import EventList from "../components/EventList";
import { useApp } from "@/context/AppProvider";
import axios from "axios";
import { Event } from "../types";

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const { currentUserId } = useApp();

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(`/api/events?userId=${currentUserId}`);
      setEvents(res.data.events);
    };
    if (currentUserId) fetchEvents();
  }, [currentUserId, isUpdated]);

  const filteredEvents = useMemo(() => {
    return events.filter((event) =>
      event.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, events]);

  const refetchEvents = () => {
    setIsUpdated((prev) => !prev);
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <EventList events={filteredEvents} refetchEvents={refetchEvents} />
    </div>
  );
}
