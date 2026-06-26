"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PrimaryButtonProps {
  text: string;
}

export default function PrimaryButton({
  text,
}: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="group inline-flex items-center gap-3 rounded-full bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-sky-700"
    >
      {text}

      <ArrowRight
        size={18}
        className="transition group-hover:translate-x-1"
      />
    </motion.button>
  );
}