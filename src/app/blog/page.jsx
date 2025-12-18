'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/layout/NavBar';
import BlogCard from '@/components/blog/BlogCard';
import FeaturedPost from '@/components/blog/FeaturedPost';

const categories = [
  "All",
  "Academic",
  "Campus Life",
  "Research",
  "Events",
  "Student Success"
];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Education in Digital Age",
    excerpt: "Exploring how technology is reshaping the educational landscape...",
    category: "Academic",
    author: "Dr. Sarah Johnson",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "/blog/education-future.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Student Success Story: From CGC to Silicon Valley",
    excerpt: "Meet our alumni who made it big in the tech industry...",
    category: "Student Success",
    author: "Alumni Office",
    date: "2024-03-10",
    readTime: "4 min read",
    image: "/blog/success-story.jpg"
  },
  {
    id: 3,
    title: "Research Breakthrough in Renewable Energy",
    excerpt: "Our science department's latest innovation in sustainable energy...",
    category: "Research",
    author: "Prof. Michael Chen",
    date: "2024-03-08",
    readTime: "6 min read",
    image: "/blog/research.jpg"
  },
  // Add more blog posts as needed
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
            Blog & Articles
          </h1>
          <p className="text-xl text-white/80">
            Stay updated with the latest news, research, and stories from our community.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/60 backdrop-blur-sm"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60">
              🔍
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-[#FFC107] text-[#034D27]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                } transition-colors`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && searchQuery === "" && (
          <div className="mb-12">
            <FeaturedPost post={featuredPost} />
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {regularPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-white/60"
          >
            No articles found matching your criteria.
          </motion.div>
        )}
      </div>
    </main>
  );
} 