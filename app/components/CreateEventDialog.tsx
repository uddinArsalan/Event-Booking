"use client";

import { useState } from "react";
// import { PlusCircle } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

export default function CreateEventDialog({
  refetchEvents,
}: {
  refetchEvents: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    maxCapacity: "",
    startTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      !form.title ||
      !form.description ||
      !form.maxCapacity ||
      !form.startTime
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/events", {
        ...form,
        maxCapacity: Number(form.maxCapacity),
      });
      toast.success("Event created successfully!");
      refetchEvents();
      setOpen(false);
      setForm({ title: "", description: "", maxCapacity: "", startTime: "" });
    } catch (err) {
      console.error("Failed to create event", err);
      toast.error("Failed to create event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 text-black">
      <div className="fixed bottom-12 right-12 z-40">
        <button
          onClick={() => setOpen(true)}
          className="flex rounded-full text-white items-center justify-center w-14 h-14 text-2xl bg-green-600 hover:bg-green-700 shadow-lg"
        >
          +
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex items-center justify-center">
          <div className="bg-white dark:bg-zinc-900 text-black dark:text-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Create a New Event</h2>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <input
              type="number"
              name="maxCapacity"
              placeholder="Max Capacity"
              value={form.maxCapacity}
              onChange={handleChange}
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <input
              type="datetime-local"
              name="startTime"
              value={form.startTime}
              onChange={handleChange}
              className="w-full mb-4 px-3 py-2 border rounded"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`px-4 py-2 rounded text-white transition ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
