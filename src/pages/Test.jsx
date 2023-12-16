import { Box, keyframes } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const Test = () => {
  const controls = useAnimation();

  useEffect(() => {
    
        const keyframes = {
            "0%": { rotate: 0, x: "100px" },
            "100%": { rotate: 360, x: "100px" },
          };
  
  }, [controls]);

  return (
    <motion.div
      animate={keyframes}
      style={{ backgroundColor: "blue", width: "100px", height: "100px" }}
    />
  );
};

export default Test;
