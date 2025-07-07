import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="relative w-40 h-40 flex items-center justify-center"
      >
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute w-full h-full border-4 border-indigo-500 rounded-full"
        ></motion.div>

        {/* Pulsating Core */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-8 h-8 bg-indigo-500 rounded-full shadow-lg"
        ></motion.div>

        {/* Orbiting Dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "linear",
              delay: i * 0.1,
            }}
            style={{
              transformOrigin: "75px center",
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 60}deg) translateX(75px)`,
            }}
          />
        ))}

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-[-3rem] text-indigo-400 text-sm tracking-widest uppercase"
        >
          Initializing system...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loading;
