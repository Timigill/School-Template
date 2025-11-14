'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const stats = [
  { number: "1000+", label: "Students", icon: "👨‍🎓" },
  { number: "50+", label: "Expert Faculty", icon: "👨‍🏫" },
  { number: "95%", label: "Placement Rate", icon: "📈" },
  { number: "20+", label: "Years Experience", icon: "🏆" }
];

const quickLinks = [
  { icon: "🎓", title: "Apply Now", link: "/admissions#apply", description: "Start your journey" },
  { icon: "📅", title: "Events", link: "/events", description: "Campus activities" },
  { icon: "🏫", title: "Programs", link: "/academics#programs", description: "Explore courses" },
  { icon: "🔐", title: "Portal", link: "/portals/student", description: "Student login" }
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/Task3.0.jpg"
          className="object-cover w-full h-full"
        >
          <source src="/campus-video.mp4" type="video/mp4" />
          {/* Fallback image */}
          <Image
            src="/Task3.0.jpg"
            alt="Campus"
            fill
            priority
            className="object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#01311f]/90 to-[#01311f]/70 backdrop-blur-sm" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-32 md:pt-40">
        <motion.div 
          {...fadeInUp} 
          className="max-w-2xl space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">Oxford </span>
            <span className="text-[#FFC107]">House</span>
            <span className="text-white"> System</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Where Excellence meets perfection
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/admissions#apply">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFC107] text-[#01311f] px-8 py-4 rounded-lg font-bold flex items-center gap-2"
              >
                <span>Apply Now</span>
                <span className="text-xl">→</span>
              </motion.button>
            </Link>
            <Link href="/virtual-tour">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#FFC107] text-[#FFC107] px-8 py-4 rounded-lg font-bold flex items-center gap-2"
              >
                <span>Virtual Tour</span>
                <span className="text-xl">🎥</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/10"
            >
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-2">{stat.number}</h3>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {quickLinks.map((link, index) => (
            <Link key={index} href={link.link}>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 transition-colors duration-300"
              >
                <span className="text-3xl mb-3 block">{link.icon}</span>
                <h3 className="text-lg font-bold text-[#FFC107] mb-1">{link.title}</h3>
                <p className="text-white/70 text-sm">{link.description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#FFC107] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#FFC107] rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}