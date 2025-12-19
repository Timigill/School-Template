'use client';

import { useState } from 'react';
import NavBar from '@/components/layout/NavBar';

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Sports Day',
    date: '2024-03-25',
    time: '09:00 AM – 01:00 PM',
    location: 'College Ground',
    description:
      'Join us for a day of athletic excellence and friendly competition.',
    image: '/events/sports-day.jpg',
  },
  {
    id: 2,
    title: 'Science Exhibition',
    date: '2024-04-05',
    time: '10:00 AM – 03:00 PM',
    location: 'Science Block',
    description:
      'Showcasing innovative projects from our talented students.',
    image: '/events/science-expo.jpg',
  },
];

export default function EventsPage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen">
      <NavBar />

      {/* ================= HERO ================= */}
      <section className="relative h-[55vh]">
        <img
          src="/flag.png"
          alt="Events"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-widest">
            EVENTS
          </h1>
          <p className="text-white/80 max-w-xl mt-4">
            Discover upcoming events, gatherings, and activities happening at our campus.
          </p>
        </div>
      </section>

      {/* ================= EVENTS LIST ================= */}
      <section className="max-w-6xl mx-auto bg-white -mt-24 relative z-20 rounded-lg shadow-lg px-6 md:px-10 py-12">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">
          Upcoming Events
        </h2>

        <div className="space-y-10">
          {upcomingEvents.map((event) => {
            const dateObj = new Date(event.date);
            const day = dateObj.getDate();
            const month = dateObj.toLocaleString('default', { month: 'short' });

            return (
              <div
                key={event.id}
                className="flex flex-col md:flex-row gap-6 border-b pb-10"
              >
                {/* Date */}
                <div className="w-20 text-center flex-shrink-0">
                  <p className="text-sm text-gray-500 uppercase">{month}</p>
                  <p className="text-3xl font-bold text-gray-800">{day}</p>
                </div>

                {/* Image */}
                <div className="md:w-64 w-full h-40 overflow-hidden rounded-md">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {event.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-2">
                    {event.location} • {event.time}
                  </p>

                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>

                  <button className="text-sm font-medium text-green-700 hover:underline">
                    View Event Details →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
