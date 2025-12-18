'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/layout/NavBar';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import SuccessStory from '@/components/testimonials/SuccessStory';
import RatingStats from '@/components/testimonials/RatingStats';

const categories = ["All", "Alumni", "Current Students", "Parents", "Employers"];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Alumni - Class of 2022",
    category: "Alumni",
    image: "/testimonials/sarah.jpg",
    quote: "My time at CGC shaped my future. The practical knowledge and industry exposure I received here were invaluable.",
    rating: 5,
    company: "Google",
    position: "Software Engineer"
  },
  {
    id: 2,
    name: "Muhammad Ali",
    role: "Current Student - Final Year",
    category: "Current Students",
    image: "/testimonials/ali.jpg",
    quote: "The faculty here is extremely supportive and the facilities are state-of-the-art. I'm confident about my career prospects.",
    rating: 5,
    achievements: ["Academic Excellence Award", "Tech Innovation Prize"]
  },
  // Add more testimonials as needed
];

const successStories = [
  {
    id: 1,
    name: "Ahmed Khan",
    gradYear: 2020,
    title: "From CGC to Silicon Valley",
    achievement: "Secured position at Microsoft",
    description: "Ahmed's journey from a small town to Silicon Valley...",
    image: "/success-stories/ahmed.jpg",
    stats: {
      salary: "$120K+",
      offers: "4 Job Offers",
      time: "2 Months"
    }
  },
  // Add more success stories
];

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTestimonials = testimonials.filter(
    testimonial => selectedCategory === "All" || testimonial.category === selectedCategory
  );

  return (
    <main className="min-h-screen bg-[#034D27]">
      <NavBar />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFC107] mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-white/80">
            Hear from our students, alumni, and community about their experiences at CGC.
          </p>
        </motion.div>

        {/* Rating Statistics */}
        <div className="mb-16">
          <RatingStats testimonials={testimonials} />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-[#FFC107] text-[#034D27]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              } transition-colors`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Featured Success Stories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {successStories.map((story) => (
            <SuccessStory key={story.id} story={story} />
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-white/60"
          >
            No testimonials found for this category.
          </motion.div>
        )}
      </div>
    </main>
  );
} 