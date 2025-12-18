'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: "Fill Application",
    description: "Complete the online application form with your personal and academic details.",
    icon: "📝"
  },
  {
    number: 2,
    title: "Submit Documents",
    description: "Upload required documents including academic records and identification.",
    icon: "📎"
  },
  {
    number: 3,
    title: "Pay Application Fee",
    description: "Submit the application processing fee through our secure payment gateway.",
    icon: "💳"
  },
  {
    number: 4,
    title: "Entrance Test",
    description: "Take the entrance test at your chosen center or online as applicable.",
    icon: "✍️"
  },
  {
    number: 5,
    title: "Interview",
    description: "Attend a personal interview with our academic panel.",
    icon: "🤝"
  }
];

export default function AdmissionSteps() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-[#FFC107] mb-6">
        Admission Process
      </h2>

      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-[#FFC107]/20 rounded-full flex items-center justify-center text-2xl">
            {step.icon}
          </div>
          <div>
            <h3 className="text-[#FFC107] font-bold mb-2">
              {step.number}. {step.title}
            </h3>
            <p className="text-white/80">{step.description}</p>
          </div>
        </motion.div>
      ))}

      <div className="bg-[#FFC107]/10 p-6 rounded-xl mt-8">
        <h3 className="text-[#FFC107] font-bold mb-4">Required Documents</h3>
        <ul className="space-y-2 text-white/80">
          <li className="flex items-center gap-2">
            <span className="text-[#FFC107]">✓</span>
            Previous Academic Records
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#FFC107]">✓</span>
            Valid ID Proof
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#FFC107]">✓</span>
            Passport Size Photographs
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#FFC107]">✓</span>
            Character Certificate
          </li>
        </ul>
      </div>
    </div>
  );
} 