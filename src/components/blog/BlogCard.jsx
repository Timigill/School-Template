'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
    >
      <div className="relative h-48">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          📚
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-[#FFC107]/20 text-[#FFC107] rounded-full text-sm">
            {post.category}
          </span>
          <span className="text-white/60 text-sm">{post.readTime}</span>
        </div>

        <Link href={`/blog/${post.id}`}>
          <h3 className="text-xl font-bold text-[#FFC107] mb-2 hover:text-[#FFC107]/80 transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-white/80 mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-white/60 text-sm">
          <span>{post.author}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
      </div>
    </motion.div>
  );
} 