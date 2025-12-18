'use client';

import { motion } from 'framer-motion';

export default function RatingStats({ testimonials }) {
  const totalTestimonials = testimonials.length;
  const averageRating = (
    testimonials.reduce((acc, curr) => acc + curr.rating, 0) / totalTestimonials
  ).toFixed(1);

  const ratingCounts = testimonials.reduce((acc, curr) => {
    acc[curr.rating] = (acc[curr.rating] || 0) + 1;
    return acc;
  }, {});

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 rounded-xl p-8 backdrop-blur-sm"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Overall Rating */}
        <div className="text-center">
          <div className="text-6xl font-bold text-[#FFC107] mb-4">
            {averageRating}
          </div>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.span
                key={star}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: star * 0.1 }}
                className="text-2xl text-[#FFC107]"
              >
                ★
              </motion.span>
            ))}
          </div>
          <p className="text-white/80">
            Based on {totalTestimonials} reviews
          </p>
        </div>

        {/* Rating Breakdown */}
        <div className="space-y-4">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = ratingCounts[rating] || 0;
            const percentage = ((count / totalTestimonials) * 100).toFixed(0);
            
            return (
              <div key={rating} className="flex items-center gap-4">
                <div className="w-12 text-white/80">{rating} ★</div>
                <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: rating * 0.1 }}
                    className="h-full bg-[#FFC107]"
                  />
                </div>
                <div className="w-12 text-right text-white/60">
                  {percentage}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
} 