'use client';

import { motion } from 'framer-motion';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'text-[#FFC107]' : 'text-white/20'}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-[#FFC107]/20 flex items-center justify-center text-2xl">
          👤
        </div>
        <div>
          <h3 className="text-[#FFC107] font-bold">{testimonial.name}</h3>
          <p className="text-white/60 text-sm">{testimonial.role}</p>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>

      <blockquote className="text-white/80 italic mb-4">
        "{testimonial.quote}"
      </blockquote>

      {testimonial.company && (
        <div className="border-t border-white/10 pt-4 mt-4">
          <p className="text-white/60 text-sm">
            Currently at: <span className="text-[#FFC107]">{testimonial.company}</span>
          </p>
          <p className="text-white/60 text-sm">
            Position: <span className="text-[#FFC107]">{testimonial.position}</span>
          </p>
        </div>
      )}

      {testimonial.achievements && (
        <div className="border-t border-white/10 pt-4 mt-4">
          <p className="text-white/60 text-sm mb-2">Achievements:</p>
          <ul className="space-y-1">
            {testimonial.achievements.map((achievement, index) => (
              <li key={index} className="text-[#FFC107] text-sm flex items-center gap-2">
                <span>🏆</span> {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
} 