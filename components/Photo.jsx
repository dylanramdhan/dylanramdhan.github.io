"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div 
            initial = {{opacity: 0}}
            animate = {{
                opacity: 1,
                transition: {delay: 2, duration: 0.4, ease: "easeInOut"},
            }}
        >
        <motion.div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image 
            src="/ProfessionalPic.jpeg"  // Correct path, assuming the image is in public folder
            priority 
            quality={100} 
            layout="fill"  // Ensures the image fills the parent container
            alt=""
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
