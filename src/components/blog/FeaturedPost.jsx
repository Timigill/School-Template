'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FeaturedPost({ post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative rounded-xl overflow-hidden"
    >
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#034D27] via-[#034D27]/80 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-9xl">
          📚
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-4 py-2 bg-[#FFC107] text-[#034D27] rounded-full font-bold">
            Featured
          </span>
          <span className="px-4 py-2 bg-white/20 text-white rounded-full">
            {post.category}
          </span>
        </div>

        <Link href={`/blog/${post.id}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-4 hover:text-[#FFC107]/80 transition-colors">
            {post.title}
          </h2>
        </Link>

        <p className="text-white/90 text-lg mb-6 max-w-3xl">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-6 text-white/80">
          <span>{post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </motion.div>
  );
} 