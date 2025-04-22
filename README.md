# 🎟️ Event Booking System – Fullstack Assignment (Fleksa)

This is a fullstack event booking system built using **Next.js** and **TypeScript**. It allows users to view events, book them, and even add new ones — all with proper constraints and clean UI.

Live Demo: [🔗 Click Here](https://event-booking.vercel.app)

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide Icons
- **State Management:** React Context API (Global Context)
- **Date Handling:** date-fns
- **Mock Database:** In-memory (users, bookings, events)
- **Notifications:** React Toasts

---

## 📦 Features

- ✅ **Mock User Signup** (simulated login system)
- 📅 **Event Listing** with title, time, and available spots
- 🔍 **Search/Filter** events by title
- 🧠 **Constraints:**
  - Can't book if **event is full**
  - Can't book **same event twice**
- ➕ **Add New Event** (form with validation)
- 📤 **Book Event** with live toast notifications
- ⚙️ **API Routes** (Next.js) for:
  - `GET /api/events`
  - `POST /api/book`
  - `POST /api/events` (add new)
- 🧪 **Type Safety** using TypeScript interfaces
- 🎨 Clean, minimal, responsive UI

---

## 🛠️ Local Setup

Follow these steps to set up the project locally:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/uddinArsalan/event-booking.git
   cd event-booking
   ```

2. **Install Dependencies**  
   Ensure you have Node.js installed (v16 or higher recommended). Then run:
   ```bash
   npm install
   ```

3. **Run the Development Server**  
   Start the Next.js development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

4. **Build for Production**  
   To create a production build, run:
   ```bash
   npm run build
   ```
   Then, start the production server:
   ```bash
   npm start
   ```

---


