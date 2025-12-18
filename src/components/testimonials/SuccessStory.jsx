'use client';

import { motion } from 'framer-motion';

export default function SuccessStory({ story }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10"
    >
      <div className="p-6">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 rounded-xl bg-[#FFC107]/20 flex items-center justify-center text-4xl">
            🎓
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#FFC107] mb-2">{story.title}</h3>
            <p className="text-white/80 mb-1">{story.name}</p>
            <p className="text-white/60 text-sm">Class of {story.gradYear}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="bg-[#FFC107]/20 text-[#FFC107] px-4 py-2 rounded-lg inline-block mb-4">
            {story.achievement}
          </div>
          <p className="text-white/80 mb-6">{story.description}</p>

          <div className="grid grid-cols-3 gap-4">
            {Object.entries(story.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-[#FFC107] font-bold mb-1">{value}</div>
                <div className="text-white/60 text-sm capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 