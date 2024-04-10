"use client"

import { motion } from "framer-motion";

export const MotionButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
        >
            {children}
        </motion.button>
    )
}